#!/bin/bash

# EduLearn Project Backup Script
echo "🎓 Creating EduLearn Project Backup..."

# Create backup directory with timestamp
BACKUP_DIR="edulearn-backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

# Copy essential project files
echo "📁 Copying project files..."
cp -r src/ "$BACKUP_DIR/"
cp -r public/ "$BACKUP_DIR/"
cp -r prisma/ "$BACKUP_DIR/"
cp package*.json "$BACKUP_DIR/"
cp next.config.js "$BACKUP_DIR/" 2>/dev/null || echo "No next.config.js found"
cp tsconfig.json "$BACKUP_DIR/" 2>/dev/null || echo "No tsconfig.json found"
cp tailwind.config.js "$BACKUP_DIR/" 2>/dev/null || echo "No tailwind.config.js found"

# Copy database if exists
if [ -d "db" ]; then
    cp -r db/ "$BACKUP_DIR/"
fi

# Create project documentation
echo "📝 Creating project summary..."
cat > "$BACKUP_DIR/PROJECT_SUMMARY.txt" << EOF
EduLearn Educational Platform Backup
=====================================

Backup Date: $(date)
Git Commit: $(git log --oneline -1 2>/dev/null || echo "Not a git repository")

Project Status:
- Complete authentication system
- 21+ comprehensive lessons
- O Level Mathematics (11 lessons)
- O Level Physics (11 lessons)
- A Level content started
- US High School content started
- Online resources integrated
- Responsive design implemented

To Restore:
1. Copy files back to project directory
2. Run: npm install
3. Run: npm run db:push (if using database)
4. Run: npm run dev

Next Development Steps:
1. Complete remaining subjects (Chemistry, Biology)
2. Expand A Level and US High School curriculum
3. Implement database integration
4. Add advanced features (quizzes, analytics)
EOF

# Create compressed archive
echo "🗜️ Creating compressed archive..."
tar -czf "${BACKUP_DIR}.tar.gz" "$BACKUP_DIR"

# Clean up uncompressed directory
rm -rf "$BACKUP_DIR"

echo "✅ Backup created: ${BACKUP_DIR}.tar.gz"
echo "📊 Backup size: $(du -h "${BACKUP_DIR}.tar.gz" | cut -f1)"
echo ""
echo "To restore:"
echo "1. tar -xzf ${BACKUP_DIR}.tar.gz"
echo "2. Copy files from extracted directory to your project"
echo "3. Run npm install"
echo "4. Run npm run dev"