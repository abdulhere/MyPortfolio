<#
  push-to-github.ps1
  Helper PowerShell script to initialize a git repo (if needed), add remote, commit, and push.

  Usage (run from project root):
    powershell -ExecutionPolicy Bypass -File .\scripts\push-to-github.ps1 -RemoteUrl 'https://github.com/abdulhere/MyPortfolio.git' -Branch 'main'

  Notes:
  - This script does NOT embed credentials. For HTTPS pushes you can either:
    * Use a GitHub Personal Access Token (PAT) in the remote URL: https://USERNAME:PERSONAL_ACCESS_TOKEN@github.com/USER/REPO.git
    * Or authenticate interactively when prompted (recommended to use credential manager).
  - Prefer SSH remotes (git@github.com:abdulhere/MyPortfolio.git) if you have SSH keys configured.
  - Review the commands before running. The script will attempt a commit only if there are staged/unstaged changes.
#>

param(
  [string]$RemoteUrl = "https://github.com/abdulhere/MyPortfolio.git",
  [string]$Branch = "main"
)

function Exec-Git {
  param([string]$Args)
  Write-Host "git $Args"
  git $Args
  if ($LASTEXITCODE -ne 0) { throw "git command failed: git $Args" }
}

try {
  # Check git available
  git --version > $null 2>&1
} catch {
  Write-Error "Git is not installed or not in PATH. Install Git and re-run this script."
  exit 1
}

Write-Host "Project root: $(Get-Location)"

if (-not (Test-Path .git)) {
  Write-Host "No git repository found. Initializing..."
  Exec-Git "init"
  Exec-Git "branch -M $Branch"
} else {
  Write-Host ".git exists — using existing repository."
}

# Configure remote
try { Exec-Git "remote remove origin" } catch {}
Exec-Git "remote add origin $RemoteUrl"

# Stage changes
Exec-Git "add -A"

# Commit if there are changes
$status = git status --porcelain
if ($status) {
  Exec-Git "commit -m \"Initial commit from local workspace\""
} else {
  Write-Host "No changes to commit. Skipping commit."
}

Write-Host "Pushing to $RemoteUrl (branch: $Branch)"
try {
  Exec-Git "push -u origin $Branch"
  Write-Host "Push completed."
} catch {
  Write-Error "Push failed — you may need to provide credentials or use a PAT/SSH. See script header notes."
  exit 1
}
