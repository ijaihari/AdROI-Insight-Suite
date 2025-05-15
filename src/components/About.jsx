

export default function About() {
    return (
        <div className="doc-container">
            <h1>ROAS Insight Suite</h1>
            <section>
                <h2>Overview</h2>
                <p>
                    <strong>ROAS Insight Suite</strong> is a powerful web application designed to provide actionable
                    insights into advertising campaigns through interactive data visualization and filtering. It helps
                    marketers and analysts track key metrics like Impressions, Clicks, Spend, CTR, and more, enabling
                    data-driven decisions to optimize Return on Ad Spend (ROAS).
                </p>
            </section>

            <section>
                <h2>Features</h2>
                <ul>
                    <li>Dynamic Filtering: Filter campaigns by components and tags.</li>
                    <li>Multiple Views: Toggle between detailed data tables and interactive charts (Radar and Bar charts).</li>
                    <li>Sorting: Sort data by key metrics in ascending or descending order.</li>
                    <li>Responsive Design: Fully responsive UI for seamless use on different devices.</li>
                    <li>Tooltips & Details: Rich tooltips on charts provide contextual information about campaigns.</li>
                </ul>
            </section>

            <section>
                <h2>Technologies Used</h2>
                <ul>
                    <li>React.js – Frontend UI framework</li>
                    <li>Redux Toolkit – State management</li>
                    <li>React Router – Routing and URL params handling</li>
                    <li>Chart.js with react-chartjs-2 – Data visualization</li>
                    <li>SCSS – Styling</li>
                    <li>JavaScript (ES6+) – Core logic</li>
                </ul>
            </section>

            <section>
                <h2>Filters & Sorting</h2>
                <p>
                    Select a metric from the <strong>Sort by</strong> dropdown to sort the table/chart by that metric.<br />
                    Choose High or Low order.<br />
                    Click the <strong>Filter</strong> options (components and tags) to narrow down campaign data.<br />
                    Toggle between <strong>Table</strong> and <strong>Chart</strong> views using the view mode buttons.
                </p>
            </section>

            <section>
                <h2>Chart Details</h2>
                <ul>
                    <li><strong>Radar Chart:</strong> Visualizes campaign data across selected metrics.</li>
                    <li><strong>Bar Chart:</strong> Shows campaign metric values for easy comparison.</li>
                    <li>Hover over chart points/bars to see detailed campaign info.</li>
                </ul>
            </section>

            <section>
                <h2>Future Enhancements</h2>
                <ul>
                    <li>Export filtered data as CSV or PDF.</li>
                    <li>Add user authentication and save filter presets.</li>
                    <li>Implement more advanced analytics and visualizations.</li>
                    <li>Support for multiple ad platforms and integrations.</li>
                </ul>
            </section>
        </div>
    );
}
