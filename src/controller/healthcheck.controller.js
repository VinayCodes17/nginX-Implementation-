// healthController.js

export const checkHealth = (req, res) => {
    try {
        // Yahan tum chahe toh database connection ya memory usage bhi check kar sakte ho
        const healthData = {
            status: 'UP',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(), // App kitni der se chal rahi hai
            environment: process.env.NODE_ENV || 'development'
        };

        // Sab kuch theek hai toh 200 status ke sath JSON bhej do
        res.status(200).json(healthData);
    } catch (error) {
        // Agar koi lafda hai toh 503 (Service Unavailable) bhej do
        res.status(503).json({
            status: 'DOWN',
            error: error.message
        });
    }
};

