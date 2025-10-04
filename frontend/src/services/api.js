import { API_BASE } from "../constants";

export const predictDisease = async (features) => {
    console.log(features)
    const res = await fetch(`${API_BASE}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(features),
    });
    return res.json();
};

export const updateStatus = async (updateData) => {
    const res = await fetch(`${API_BASE}/add-status`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
    });

    if (!res.ok) {
        throw new Error(`Failed to update status: ${res.statusText}`);
    }

    return res.json();
};


export const fetchLogs = async () => {
    const res = await fetch(`${API_BASE}/get-logs`);
    const data = res.json();
    console.log(data)
    return data;
};

export async function getStats() {
    const res = await fetch(`${API_BASE}/stats`);
    return res.json();
}

