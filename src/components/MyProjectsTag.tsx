import { useEffect, useState } from 'react';

function MyProjectsTag() {
    const [dots, setDots] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDots((dots + 1) % 4)
        }, 300);
        return () => clearInterval(interval);
    }, [dots]);

    return (
        <p className="text-2xl font-serif mb-52">My Projects {".".repeat(dots)}</p>
    )
}


export default MyProjectsTag