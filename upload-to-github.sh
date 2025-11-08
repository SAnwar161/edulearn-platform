#!/bin/bash

# GitHub Upload Script for EduLearn Platform
echo "🎓 EduLearn Platform - GitHub Upload Script"
echo "=========================================="

echo ""
echo "📋 BEFORE RUNNING THIS SCRIPT:"
echo "1. Create a new repository on GitHub"
echo "2. Copy your repository URL"
echo "3. Replace YOUR_USERNAME in the script below"
echo ""

# Variables - REPLACE THESE WITH YOUR INFO
GITHUB_USERNAME="YOUR_USERNAME"  # <-- REPLACE WITH YOUR GITHUB USERNAME
REPO_NAME="edulearn-platform"     # <-- OR YOUR CHOSEN REPO NAME

echo "🔧 Configuration:"
echo "GitHub Username: $GITHUB_USERNAME"
echo "Repository Name: $REPO_NAME"
echo ""

# Construct the repository URL
REPO_URL="https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

echo "🌐 Repository URL: $REPO_URL"
echo ""

# Commands to run (commented out for safety)
echo "📤 Commands to execute:"
echo "git remote add origin $REPO_URL"
echo "git push -u origin master"
echo ""

echo "✅ Ready to upload to GitHub!"
echo ""
echo "📝 Next Steps:"
echo "1. Replace YOUR_USERNAME with your actual GitHub username"
echo "2. Run the commands above in your terminal"
echo "3. Authenticate with GitHub when prompted"
echo "4. Check your repository on GitHub to verify upload"