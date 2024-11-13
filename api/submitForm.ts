// api/submitForm.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Assuming your form sends JSON data, you can access it like this:
      const { name, email, message } = req.body;

      // Here, you could save the data to a database or perform any logic
      // For this example, we're just logging the data to the console
      console.log('Form submitted:', { name, email, message });

      // Respond with success status
      return res.status(200).json({ message: 'Form submitted successfully' });
    }

    // If the method is not POST, return a 405 error (Method Not Allowed)
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
