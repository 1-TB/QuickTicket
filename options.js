/*
 Copyright 2024 Jordan Carter
 */
document.addEventListener('DOMContentLoaded', () => {
  // Load the saved Jira URL and newTab setting
  chrome.storage.sync.get(['jiraUrl', 'newTab'], (data) => {
    document.getElementById('jiraUrl').value = data.jiraUrl || '';
    document.getElementById('newTab').checked = data.newTab !== false;
  });

  // Save the Jira URL and newTab setting
  document.getElementById('save').addEventListener('click', () => {
    const jiraUrl = document.getElementById('jiraUrl').value;
    const newTab = document.getElementById('newTab').checked;
    chrome.storage.sync.set({ jiraUrl, newTab }, () => {
      console.log('Settings saved');
    });
  });
});
