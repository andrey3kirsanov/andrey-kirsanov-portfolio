// Import Assets
import bakong from '../assets/bakong.png';
import walgreens from '../assets/walgreens.png';
import sonic from '../assets/sonic.png';
import buffalo_wild_wings from '../assets/buffalo_wild_wings.png';
import vista from '../assets/vista.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>VistaJet Pre Flight Approval System</h3>
                    <img src={vista} alt="VistaJet Page" />
                    <p>Project for Flight Operations vertical of global aviation company</p>
                    <p>Technology stack: Java 11, Spring Boot, AWS (Lambdas, ECS, SNS, SQS, SES, DynamoDB, DocumentDB, Step Functions), Apache Kafka, SOAP, Docker</p>

                    <a href="https://vistaglobal.com/" target="_blank" className="button">Site</a>
                </div>

                <div className="projects__card">
                    <h3>Walgreens Health Corner</h3>
                    <img src={walgreens} alt="Walgreens Health Corner Page" />
                    <p>The Walgreens Health Corner app helps you manage and organize much of your daily health in one easy place.</p>
                    <p>Technology stack: Java 11, Spring Boot, Spring Cloud Stream, Microsoft Azure (AKS, Functions, Cosmos DB, Service Bus, Event Hub, Cognitive Search), GraphQL</p>

                    <a href="https://apps.apple.com/us/app/walgreens-health-corner/id1580616650?platform=ipad" target="_blank" className="button">Site</a>
                </div>

                <div className="projects__card">
                    <h3>Buffalo Wild Wings</h3>
                    <img src={buffalo_wild_wings} alt="Buffalo Wild Wings Page" />
                    <p>American casual dining restaurant and sports bar franchise in the United States, Canada, India, Mexico, Panama, Philippines, Saudi Arabia, and United Arab Emirates which specializes in Buffalo wings and sauces.</p>
                    <p>Technology stack: Java 11, Spring Boot, Microsoft Azure (AKS, Cosmos DB, Service Bus), Redis, Docker</p>

                    <a href="https://www.buffalowildwings.com/" target="_blank" className="button">Site</a>
                </div>

                <div className="projects__card">
                    <h3>Sonic Drive-In</h3>
                    <img src={sonic} alt="Sonic Drive-In Page" />
                    <p>American drive-in fast food restaurant chain.</p>
                    <p>Technology stack: Java 11, Pivotal Cloud Foundry (PCF), Spring Boot, Spring Cloud Config, Spring AMQP, Spring Data, PostgreSQL, Redis, RabbitMQ, Docker Compose</p>

                    <a href="https://www.sonicdrivein.com/" target="_blank" className="button">Site</a>
                </div>

                <div className="projects__card">
                    <h3>Bakong</h3>
                    <img src={bakong} alt="Bakong Page" />
                    <p>Bakong is Cambodia's only integrated payment system that allows you to do everything - e-wallets, mobile payments, online banking and financial applications - all in one place.</p>
                    <p>Technology stack: Java 8, Spring Boot, Spring Cloud, Spring Data, Spring Security, Apache Camel, PostgreSQL, RabbitMQ, HazelCast, Docker, Docker Compose</p>

                    <a href="https://soramitsu.co.jp/centralbanking" target="_blank" className="button">Site</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;