import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, IconButton, Typography, Paper, Avatar, AppBar, Toolbar, List, ListItem, Fab, Zoom } from '@mui/material';
import { Send, MessageCircle, X, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ChatBot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hello! I am **CITTA**. How can I help you today?' }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, history: messages }),
      });
      const data = await response.json();
      let aiContent = data.reply;

      if (aiContent.includes('[REDIRECT_CONTACT]')) {
        aiContent = aiContent.replace('[REDIRECT_CONTACT]', '').trim();
        setTimeout(() => { setIsOpen(false); navigate('/contact'); }, 1500);
      }
      setMessages(prev => [...prev, { role: 'assistant', content: aiContent }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "Error connecting to server." }]);
    } finally { setIsTyping(false); }
  };

  return (
    <>
      <Fab color="primary" onClick={() => setIsOpen(!isOpen)} sx={{ position: 'fixed', bottom: 20, right: 20, bgcolor: '#1a237e' }}>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Fab>
      <Zoom in={isOpen}>
        <Paper elevation={6} sx={{ width: { xs: '90vw', sm: 380 }, height: 500, display: 'flex', flexDirection: 'column', borderRadius: 4, position: 'fixed', bottom: 90, right: 20, zIndex: 1000, overflow: 'hidden' }}>
          <AppBar position="static" sx={{ bgcolor: '#1a237e' }}>
            <Toolbar variant="dense">
              <Avatar sx={{ bgcolor: 'white', mr: 1, width: 32, height: 32 }}><Bot size={20} color="#1a237e" /></Avatar>
              <Typography variant="h6" sx={{ flexGrow: 1, fontSize: '1rem' }}>CITTA BOT</Typography>
            </Toolbar>
          </AppBar>
          <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2, bgcolor: '#f8fafc' }}>
            <List dense>
              {messages.map((msg, i) => (
                <ListItem key={i} sx={{ flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start', mb: 2, px: 0 }}>
                  <Paper sx={{ p: 1.5, bgcolor: msg.role === 'user' ? '#1a237e' : 'white', color: msg.role === 'user' ? 'white' : '#334155', borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px', maxWidth: '85%', '& p': { m: 0, fontSize: '0.85rem' } }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
                  </Paper>
                </ListItem>
              ))}
              <div ref={scrollRef} />
            </List>
          </Box>
          <Box sx={{ p: 2, display: 'flex', gap: 1, borderTop: '1px solid #e2e8f0' }}>
            <TextField fullWidth size="small" placeholder="Ask CITTA..." value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} />
            <IconButton sx={{ bgcolor: '#1a237e', color: 'white' }} onClick={handleSend} disabled={isTyping}><Send size={18} /></IconButton>
          </Box>
        </Paper>
      </Zoom>
    </>
  );
};

export default ChatBot;