export const test = (req, res) => {  // ✅ Correct Order
    try {
        console.log('Testing successful');
        res.json({ message: 'Test successful' }); // ✅ Return JSON response
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' }); // ✅ Send error response
    }
};
