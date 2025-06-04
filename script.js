// const sheetId = "1wyM1GhCTts3jlHQgcy-pLrd61Kvagyw979VIadjLGd4"; // Replace with your Google Sheet ID
// const sheetName = 'FormData'; // Or whatever you want to name your sheet

// function doPost(e) {
//   try {
//     const data = JSON.parse(e.postData.contents);
//     const ss = SpreadsheetApp.openById(sheetId);
//     const sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
    
//     // If sheet is empty, add headers
//     if (sheet.getLastRow() === 0) {
//       sheet.appendRow(["Timestamp", "Name", "Email", "Subject", "Message"]);
//     }
    
//     // Add form data
//     const timestamp = new Date();
//     sheet.appendRow([
//       timestamp,
//       data.name,
//       data.email,
//       data.subject,
//       data.message
//     ]);
    
//     return ContentService.createTextOutput(JSON.stringify({
//       success: true,
//       message: "Data saved successfully"
//     })).setMimeType(ContentService.MimeType.JSON);
    
//   } catch (error) {
//     return ContentService.createTextOutput(JSON.stringify({
//       success: false,
//       message: error.message
//     })).setMimeType(ContentService.MimeType.JSON);
//   }
// }

// function doGet() {
//   return HtmlService.createHtmlOutput("<h1>Form Data Collector</h1><p>This service collects form data.</p>");
// }
// document.getElementById('contactForm').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         subject: document.getElementById('subject').value,
//         message: document.getElementById('message').value
//     };
    
//     // Replace with your Google Apps Script web app URL
//   const scriptUrl = "https://script.google.com/macros/s/AKfycbyAVxPy3XF3UNvITXeRvToHQD1339a9fvYjn_HhhrHQ7YpvWh1cCXGDpRQln8FmS1FIQQ/exec";

// fetch(scriptUrl, {
//     method: 'POST',
//     body: JSON.stringify(formData),
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert('Message sent successfully!');
//             document.getElementById('contactForm').reset();
//         } else {
//             throw new Error(data.message);
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('There was an error sending your message. Please try again.');
//     });
// });