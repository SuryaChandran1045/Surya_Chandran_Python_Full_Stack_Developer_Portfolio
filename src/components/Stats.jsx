function Stats() {

    const stats = [
        {
            number: "2Y 5M",
            label: "IT EXPERIENCE"
        },
        {
            number: "80%",
            label: "MANUAL WORKFLOWS DIGITIZED"
        },
        {
            number: "7",
            label: "ERP MODULES SUPPORTED"
        },
        {
            number: "25–30%",
            label: "LOWER API LATENCY"
        }
    ];

    return (
        <section className="stats">

            {stats.map((stat) => (
                <div
                    className="stat-item"
                    key={stat.label}
                >
                    <strong>{stat.number}</strong>
                    <span>{stat.label}</span>
                </div>
            ))}

        </section>
    );
}

export default Stats;