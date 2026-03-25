Here's how to commit changes for any scenario:
Any change in any file (most common)
bashgit add .
git commit -m "Your message"
git push

Only frontend changes
bashgit add citta-technologies/
git commit -m "Frontend: describe what you changed"
git push

Only backend changes
bashgit add citta-backend/
git commit -m "Backend: describe what you changed"
git push

Only a specific file
bashgit add citta-technologies/src/pages/Home.jsx
git commit -m "Updated Home page hero section"
git push

Useful commands to check before committing
bashgit status          # see what files changed
git diff            # see exact line-by-line changes
git log --oneline   # see all past commits

Good commit message examples
bashgit commit -m "Add contact form validation"
git commit -m "Fix navbar mobile menu bug"
git commit -m "Update services page content"
git commit -m "Backend: add email notification on contact submit"
```

The golden rule — **always follow this order:**
```
git add  →  git commit  →  git pushWant to be notified when Claude responds?Notify Sonnet 4.6Claude is AI and can make mistakes. Please double-check responses.
