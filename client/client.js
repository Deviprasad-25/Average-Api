const number = Number(process.argv[2]);

if (!Number.isFinite(number)) {
    console.error("Usage: node client/client.js <number>");
    process.exit(1);
}

async function sendNumber() {
    try {
        const response = await fetch("http://localhost:5000/average", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ number })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Error:", data.error);
            process.exit(1);
        }

        console.log(`Average: ${data.average}`);
    } catch (error) {
        console.error("Unable to connect to the API:", error.message);
        process.exit(1);
    }
}

sendNumber();