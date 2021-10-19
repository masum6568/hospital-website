import { useEffect, useState } from "react";

const ServicesApi = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return { services };
};

export default ServicesApi;