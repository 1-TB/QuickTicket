# QuickTicket Chrome Extension

QuickTicket is a Chrome extension that allows users to quickly navigate to Jira ticket pages by entering a ticket ID. It's designed to streamline the process of accessing tickets for users who frequently work with Jira.

## Features

- **Quick Access:** Enter a Jira ticket ID and either open it in the current tab or a new tab.
- **Customizable Jira URL:** Set your company's Jira base URL via the extension's options page.
- **Simple Interface:** A clean and straightforward UI for easy use without unnecessary clutter.
- **Input Validation:** Ensures that the ticket ID entered matches the expected format.
- **Recently Viewed Tickets:** Keep track of your recently accessed tickets for quick reference and navigation.


## Installation

To install QuickTicket, follow these steps:

1. Download the extension files or clone the repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" at the top right corner of the page.
4. Click "Load unpacked" and select the directory containing the extension files.
5. The QuickTicket extension should now be installed and visible in your Chrome toolbar.

## Usage

1. Click on the QuickTicket icon in the Chrome toolbar to open the popup.
2. Enter the ticket ID in the input field.
3. Click the "Go!" button to navigate to the Jira ticket page.

Before using the extension for the first time, set your Jira base URL:

1. Right-click on the QuickTicket icon and select "Options."
2. Enter your Jira base URL (e.g., `https://yourcompany.atlassian.net/browse/`) in the text field.
3. Choose whether you want to open tickets in a new tab or the current tab.
4. Click "Save" to store your settings.

## Options

- **Jira URL:** The base URL for your Jira instance. This is where the extension will append the ticket ID to form the complete URL to the ticket page.
- **Open in New Tab:** When checked, tickets will open in a new tab. If unchecked, tickets will open in the current tab.

## Contributing

Contributions to QuickTicket are welcome! If you have suggestions for improvements or encounter any issues, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Jordan Carter, for the initial concept and development of QuickTicket.
- All contributors who help maintain and improve this extension.

## Contact

For support or general inquiries, contact [quickticket@nsa.icu](mailto:quickticket@nsa.icu).

---

**Note:** This extension is not officially affiliated with Atlassian Jira.
