# GitHub Connection Guide

## After creating your repository on GitHub:

### Step 3A: Get Your Repository URL
From GitHub, copy your repository URL:
- It should look like: https://github.com/yourusername/edulearn-platform.git

### Step 3B: Connect Local Project to GitHub
Open your terminal in the project directory and run:

```bash
# Add GitHub as remote (replace with your actual URL)
git remote add origin https://github.com/YOUR_USERNAME/edulearn-platform.git

# Verify the remote was added
git remote -v

# You should see something like:
# origin  https://github.com/YOUR_USERNAME/edulearn-platform.git (fetch)
# origin  https://github.com/YOUR_USERNAME/edulearn-platform.git (push)
```

### Step 3C: Push to GitHub
```bash
# Push your code to GitHub
git push -u origin master

# You may need to authenticate with GitHub
# Enter your GitHub username and password/token
```

## Troubleshooting:
- If you get an authentication error, you might need to use a Personal Access Token
- Go to GitHub Settings → Developer settings → Personal access tokens
- Generate a new token with "repo" permissions