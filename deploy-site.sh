#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Check if a commit message was provided
if [ -z "$1" ]; then
  echo "Error: No commit message provided."
  echo "Usage: ./deploy-site.sh \"Your commit message\""
  exit 1
fi

COMMIT_MESSAGE="$1"

echo "-------------------------------------------------"
echo "Step 1: Staging changes..."
# Make sure we are on the develop branch first (optional, but good safeguard)
# current_branch=$(git symbolic-ref --short HEAD)
# if [ "$current_branch" != "develop" ]; then
#   echo "Error: Not on the develop branch. Please checkout develop first."
#   exit 1
# fi
git add .

echo "-------------------------------------------------"
echo "Step 2: Committing changes with message: $COMMIT_MESSAGE"
git commit -m "$COMMIT_MESSAGE"

echo "-------------------------------------------------"
echo "Step 3: Pushing source code to origin/develop..."
git push origin develop

echo "-------------------------------------------------"
echo "Step 4: Building static site for production..."
# Ensure dev server is stopped (important for clean build)
# (User should ensure this manually before running the script)
if pgrep -f "next dev" > /dev/null; then
    echo "Warning: Next.js dev server might be running. For a clean build, it should be stopped."
    # Optionally, you could try to kill it, but that can be risky:
    # pkill -f "next dev"
    # sleep 2 # Give it a moment to shut down
fi
npm run build

echo "-------------------------------------------------"
echo "Step 5: Deploying to GitHub Pages (main branch)..."
npm run deploy

echo "-------------------------------------------------"
echo "Deployment script finished."
echo "Check your GitHub Pages site in a few minutes." 