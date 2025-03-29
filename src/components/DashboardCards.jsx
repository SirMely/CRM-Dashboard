import '../styles/dashboard.css'

function DashboardCards({stats}) {
    return (
        <div className="dashboard-container">
            {stats.map((item) => (
                <div key={item.label} className="dashboard-card">
                    <h3>{item.label}</h3>
                    <p>{item.value}</p>
                </div>
            ))}
        </div>
    );
}

export default DashboardCards;
