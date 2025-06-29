  
export const data = [
    {
        title: "Webapp to compare annual reports and create custom KPIs",
        category: "WebDev",
        tags: ['Personal', 'WebDev', 'React.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind', 'Next.js'],
        images: ["/pf/AnnualReportChat/0bis.png", "/pf/AnnualReportChat/0.png", "/pf/AnnualReportChat/1.png", "/pf/AnnualReportChat/2.jpg"],
        description:`<p style="color:red; text-align:center;">🏆 Winner of the <a href="https://www.swisshacks.com" target="_blank">SwissHacks 2024 Hackathon</a> for financial innovation 🏆</p>
                     <p>We participated in the Microsoft + Unique challenge, Financial Innovation with AI. As winners, we got invited to present our idea at the Point Zero Forum fintech conference.</p>
                     <br>
                     <iframe style="margin:auto;" width="560" height="315" src="https://www.youtube.com/embed/Px1rdv2ye8E?si=Z4FdX6XoaZyuMhXj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                     <br>
                     <p>The entry is a webapp where you can upload annual reports of companies and extract summaries of the differences between two reports, for any subject
                     (e.g. how performance in Europe changed for different years of a particular company, or between two companies).
                     It also includes a tool to calculate custom KPIs even if they don't explicitely appear in the reports.</p>
                     <p>The backend uses RAG (Retrieval Augmented Generation) to locate the pages with the most relevant information and prompt OpenAI with the necessary context to solve the query. To calculate custom KPIs, the app first queries OpenAI for the adequate formula and then attempts to find its operands within the document.</p>
                     <p>Moreover, the website has responsiveness, user registration, file upload, a paid tier, payment processor, a chat with response streaming in real time and infinite scrolling, etc.</p>
                     <p>The project and its success wouldn't have been possible without <a href="https://www.linkedin.com/in/olivieropinotti/">Oliviero Pinnoti</a>, Ana Pedra, Olivier Lüthy and Clemens Beeken.</p>`,
        live_link: "https://swisshacks2024.vercel.app",
        github_link: "https://github.com/Tyronnosaurus/swisshacks2024"
    },

    {
        title: "Textile defect detection with CNN & autoencoders",
        category: "Development",
        tags: ['Professional', 'Python', 'Pandas', 'Matplotlib', 'Tensorflow'],
        images: ["/pf/TextileDefectDetection/0.png", "/pf/TextileDefectDetection/1.png", "/pf/TextileDefectDetection/2.png", "/pf/TextileDefectDetection/3.png", "/pf/TextileDefectDetection/4.png", "/pf/TextileDefectDetection/5.png", "/pf/TextileDefectDetection/6.png"],
        description:`<p>Python project to detect defects in a textile knitting machine with deep learning (convolutional neural networks applied to the training of autoencoders).</p>
        <p>I first trained a convolutional autoencoder with pictures without defects, and used it to reconstruct pictures with defects. This resulted in the defects being "healed", while maintaining the rest of the picture mostly undisturbed. From here, I could compare the differences between the original and the reconstructed picture to locate the defects.</p>`
    },

    {
        title: "S1G Ultrasonic molding machine",
        category: "Mechatronics",
        tags: ['Professional', 'PLC', 'B&R', 'ST', 'C++'],
        images: ["/pf/S1G/sonoruss1g-1.jpg", "/pf/S1G/injections.jpg"],
        description:`<p><a href="https://ultrasion.eu" style="font-weight:bold;">Ultrasion</a> is the leading company in ultrasound molding, i.e. the technology by which a plastic injection machine melts plastic pellets using ultrasounds, instead of a heated barrel, for improved efficiency in terms of energy and material.</p>
            <p>As lead programmer in Ultrasion I single-handedly rewrote 7 years worth of code with high technical debt (written incrementally by different programmers as the research progressed, with little documentation, obsolete functionality and confusing UX). Some of the tasks I did were:</p>
            <ul>
                <li>Simplified overall process by understanding and refactoring each part of the process.</li>
                <li>Improved encapsulation; simplified implementation of different machine configurations.</li>
                <li>Improved process monitoring and data exporting.</li>
                <li>Improved overall user experience.</li>
                <li>Implemented an external robot arm and the extra safety features.</li>
                <li>And many more features</li>
            </ul>
            <p><p>
            <iframe style="margin:auto;" width="560" height="315" src="https://www.youtube.com/embed/o-1tc5cUHmg?si=DpP2HKgVWWg2cISc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    },

    {
        title: 'S2G Ultrasonic molding machine',
        category: "Mechatronics",
        tags: ['Professional', 'PLC', 'B&R', 'ST', 'C++', 'Solidworks'],
        images: ['/pf/S2G/S2G.png', '/pf/S2G/S2GCAD.png'],
        description:`<p>The S2G machine is a redesign of the S1G for plastic pieces that require higher pressures.</p>
            <p>Just like the S1G, the S2G had unoptimized code. Rather than rewriting it, I adapted the code I had already rewritten from the S1G. There were a few problems that I had to solve, though:</p> 

            <ul>
                <li>The axes had mechanical differences which meant the homing and anti-collision systems had to be rewritten.</li>   
                <li>The mold axis incorporated a toggle mechanism, which required a CAM control in order to have a lineal mold movement.</li>
                <li>New external sensors meant I had to write a new data adquisition program. It plotted internal pressure and temperature for the last injection cycles (among other data) and proved very useful to increase repetibility.</li>
                <li>Had to redo dozens of parts and hundreds of linkages in the SolidWorks 3D model.</li>
                <li>Many other small changes.</li>
            </ul>
            <p>The following video (in Catalan) features the machine at 1:26:</p>
            <iframe style="margin:auto;" title="video 6223690" src="https://www.ccma.cat/video/embed/6223690/" allowfullscreen scrolling="no" frameborder="0" width="500px" height="281px"></iframe>`
    },

    {
        title: 'Telemetrics pipeline with Dashboard for fleet of vehicles',
        category: "DevOps",
        tags: ['Professional', 'AWS', 'Python', 'Grafana', 'J1939'],
        images: ["/pf/Vehicle-telemetrics/1.png", "/pf/Vehicle-telemetrics/2.jpg"],
        description:`<p>For a client in the mining industry, I designed and deployed a Cloud telemetry system and dashboarding solution with relevant metrics from their vehicles. The pipeline can process millions of daily messages and is optimized for low storage cost, scalability and security. Since it is fully defined in IaC, it can be redeployed repeatedly in minutes.</p>`,
        live_link: "https://www.himesa.es/en/pegasus-mine-en",
    },

    {
        title: 'Kubernetes deployment of customer support suite for banking client',
        category: "DevOps",
        tags: ['Professional', 'AWS', 'Helm', 'Kubernetes', 'Python', 'Docker'],
        images: ["/pf/image_not_available.png"],
        description:`<p>I provided assistance in the migration of various applications, spanning around 30 microservices, to Kubernetes. This involved preparing Helm Charts, troubleshooting deployments, preparing complementary applications such as Istio, Elasticsearch, fluentd, cert-manager...</p>`,
    },

    {
        title: 'Kubernetes deployment of Python application with Helm Chart',
        category: "DevOps",
        tags: ['Personal', 'AWS', 'Helm', 'Kubernetes', 'Python', 'Docker'],
        images: ["/pf/HelloWorldK8sHelm.png"],
        description:`<p>A simple example on how to create a Python app, containerize it, and install it on K8s with Helm & helmfile.d.</p>`,
        github_link: "https://github.com/Tyronnosaurus/helm-chart-case-study"
    },

    {
        title: 'Jenkins CI/CD pipeline to deploy Java Maven app to Kubernetes',
        category: "DevOps",
        tags: ['Personal', 'Jenkins', 'Kubernetes', 'Docker'],
        images: ["/pf/jenkins-eks.png"],
        description:`<p>Complete CI/CD pipeline of a Java Maven app. On every commit of the app, Jenkins triggers a pipeline to build a Docker image, store it in AWS ECR, and deploy it to Kubernetes (EKS).</p>`,
        github_link: "https://github.com/Tyronnosaurus/jenkins-cicd-java-kubernetes-ecr"
    },

    {
        title: 'Jenkins + Terraform CI/CD pipeline to deploy Java Maven app to EC2',
        category: "DevOps",
        tags: ['Personal', 'Jenkins', 'AWS', 'Docker', 'Terraform'],
        images: ["/pf/jenkins-ec2.png"],
        description:`<p>Complete CI/CD pipeline of a Java Maven app. On every commit of the app, Jenkins triggers a pipeline to build a Docker image, store it in AWS ECR, provision an EC2 intance on AWS, and deploy the image in it.</p>`,
        github_link: "https://github.com/Tyronnosaurus/jenkins-cicd-java-ecr-ec2"
    },

    {
        title: "AI contract analyzer webapp",
        category: "WebDev",
        tags: ['Personal', 'WebDev', 'React.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind', 'Next.js'],
        images: ["/pf/contract-analyzer/0.png", "/pf/contract-analyzer/1.png", "/pf/contract-analyzer/2.png", "/pf/contract-analyzer/3.png", "/pf/contract-analyzer/4.png", "/pf/contract-analyzer/5.png", "/pf/contract-analyzer/6.png", "/pf/contract-analyzer/7.png"],
        description:`<p>A complete webapp where you can upload a PDF of a contract and get a full analysis with many useful sections: summary, risks, opportunities, negotation points...</p>
                     <p>Includes everything a small SaaS would need: responsiveness, user registration, database, different plans, payment processor, etc.</p>
                     <p>Created following <a href="https://www.youtube.com/watch?v=4qdQ7kE80SY">this tutorial</a>.</p>`,
        github_link: "https://github.com/Tyronnosaurus/contract-analyzer"
    },

    {
        title: "Webapp for reinsurance client risk assessment",
        category: "WebDev",
        tags: ['Personal', 'WebDev', 'React.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind', 'Python'],
        images: ["/pf/reinsurance.jpg"],
        description:`<p>A webapp that parses a package of documentation related to one client looking to buy reinsurance services (insurance for insurance companies), and presents data to help an agent decide how risky they would be if approved.</p>
                     <p>It can parse many kind of files (text files such as txt, markdown, csv, and also PDF and Excel files). It uses an LLM to prepare the analysis.</p>
                     <p>It also includes a RAG system that searches through a database of thousands of financial files and recent news articles for context relating to the client, which then gets used in the analysis.</p>
                     <br>
                     <iframe style="margin:auto;" width="560" height="315" src="https://www.youtube.com/embed/5Y5its6f12I?si=peUYPMH-9EE6982c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                     <br>
                     <br>
                     <p>Created during the Swisshacks 2025 Hackathon.</p>`,
        github_link: "https://github.com/olivierluethy/SwissHacks2025"
    },

    {
        title: 'API to extract data from text to custom JSON with AI',
        category: "Development",
        tags: ['Personal', 'WebDev', 'TypeScript', 'Next.js'],
        images: ["/pf/JsonAPI/1.png", "/pf/JsonAPI/2.png"],
        description:`<p>This project is an API which accepts a POST request containing text and a JSON schema. It will use AI to extract data from the text and return it as a JSON in the specified schema.</p>
        <p>It includes a form to test the API without the need to use an external application like Postman.</p>`,
        github_link: "https://github.com/Tyronnosaurus/text-to-json-api"
    },

    {
        title: "React webapp to chat with PDFs",
        category: "WebDev",
        tags: ['Personal', 'WebDev', 'React.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind', 'Next.js'],
        images: ["/pf/PdfChat/1.png", "/pf/PdfChat/2.png"],
        description:`<p>A complete webapp where you can upload a PDF and ask questions about it in plain English. Includes everything a SaaS would need: responsiveness, user registration, database, different plans, payment processor, chat with infinite scrolling, etc.</p>
                     <p>Whenever a PDF is uploaded, it is analysed and each page has its text converted to vector embeddings. When a user asks a question, the question is also converted to a vector embedding. A comparison is done to find out which pages are semantically closer to the question. Finally, a prompt is sent to an AI service with both the question and the relevant text from the PDF. The answer is streamed into a chat message, and the user can then ask further questions.
                     <p>Created following <a href="https://www.youtube.com/watch?v=ucX2zXAZ1I0">this tutorial</a>.</p>`,
        github_link: "https://github.com/Tyronnosaurus/quill"
    },

    {
        title: "Ultrasion's website",
        category: "WebDev",
        tags: ['Professional', 'WebDev', 'Wordpress'],
        images: ["/pf/Ultrasion website/1.png", "/pf/Ultrasion website/2.png"],
        description:`<p>The company I was working on, Ultrasion, had a relatively old website. I remade it from scratch using Wordpress.</p>`,
        live_link: "https://ultrasion.eu"
    },

    {
        title: "IIOT Telemetrics Software",
        category: "DevOps",
        tags: ['Professional', 'PLC', 'Codesys', 'Python', 'Docker', 'Grafana', 'Ladder', 'ST', 'Turck', 'Panasonic', 'FPWIN', 'HMWIN', 'MQTT', 'Node-RED', 'TX Visu Pro'],
        images: ["/pf/IIOT telemetrics/0.png", "/pf/IIOT telemetrics/1.jpg"],
        description:`<p>Project in which a client requested a global telemetry system for all the textile machines they sold. The purpose was to transmit productivity data and alarms for predictive maintenance.</p>
        <p>I prepared a mockup of the machines and implemented the necessary code to compile, preprocess and send the data to a server containing Docker images for the MQTT Broker, a database, a dashboard...</p>`
    },

    {
        title: "Custom controller for heavily modified mining EVs",
        category: "Development",
        tags: ['Professional', 'PLC', 'Codesys', 'Beijer', 'iX Developer', 'C#', 'Ladder', 'ST', 'Python', 'J1939'],
        images: ["/pf/EVLoader/1.webp", "/pf/EVLoader/2.jpeg", "/pf/EVLoader/3.jpeg", "/pf/EVLoader/5.png", "/pf/EVLoader/7.png", "/pf/EVLoader/8.png"],
        description:`<p>A client requested a new controller for the electric conversion of two of their industrial mining vehicles. I selected the optimal controller, designed the architecture, and implemented the following from scratch:</p>
        <ul>
            <li>Control of many new and old components: electric motors, hydraulics, batteries, voltage converters, a compressor, pumps, fans, various sensors, I/O modules, etc.</li>
            <li>Interaction with closed source propietary components, and emulation of removed components. This required extensive analysis of the communication protocols with Python.</li>
            <li>Parametrizable traction system on either torque or speed mode.</li>
            <li>Multiple languages, user system with permissions, alarms, audit, plotting of important magnitudes over time, database backup...</li>
            <li>Over 40 screens to configure and monitor the onboard systems.</li>
        </ul>`
    },

    {
        title: "Firmware for industrial EV battery",
        category: "Development",
        tags: ['Professional', 'PLC', 'Codesys', 'J1939'],
        images: ["/pf/EVLoader/battery.jpg"],
        description:`<p>I wrote the firmware that runs in a battery for an industrial mining EV. I developed algorithms to safely provide or absorb very high currents, internal heating/cooling systems, fast charging, configurable settings, many safety features...</p>`
    },

    {
        title: 'Digital Twin for the S2G',
        category: "Mechatronics",
        tags: ['Professional', 'PLC', 'B&R', 'ST', 'C++', 'Solidworks'],
        images: ['/pf/S2G/Twin.png', '/pf/S2G/S2GCAD.png'],
        description:`<p>The S2G machine (described in another project) contains many moving parts, and it is perfectly capable of destroying itself if not programmed properly.
                        To prevent collisions between the axes, I developed a digital twin that connects to the machine's firmware running in simulated mode.
                        This way, I could modify code related to motion and visually inspect the movements without danger or downtime.</p>
                        
                        <p>Moreover, I used the digital twin to prepare educational videos for our clients.</p>`
    },

    {
        title: "FEA results visualizer",
        category: "Development",
        tags: ['Professional', 'Python', 'Matplotlib'],
        images: ["/pf/FEA visualizer/0.png", "/pf/FEA visualizer/1.png"],
        description:`<p>Python program to visualize Finite Element Analysis results presented as a mesh in HDF5 format. It has the following functionalities:</p>
        <ul>
            <li>Deformation, with an exageration factor since deformations are usually small.</li>
            <li>Transparency to check internal stresses.</li>
            <li>Identification and skipping of interior walls so that the visualization is smoother.</li>
        </ul>`
    },

    {
        title: "Cura plugin for FEA Stress analysis",
        category: "Development",
        tags: ['Professional', 'Python', '3D printing', 'Qt'],
        images: ["/pf/Cura plugin/0.jpg", "/pf/Cura plugin/1.jpg"],
        description:`<p>Research project with the goal of creating a plugin to preview if a 3D printed part would be able to withstand a set of loads, and to print it in the best orientation possible.</p>
        <ul>
            <li>Offers a new screen to input anchors and loads on selected faces.</li>
            <li>Offers a menu to select the physical properties of the material (Young, Poisson...) in each axis (X, Y, Z).</li>
            <li>Connects to an external FEA engine to send data and receive results. This part was done by a different developer.</li>
            <li>It integrates the standalone Python script I made to represent a results mesh, meaning it has support for deformation, transparency and detection of inner nodes.</li>
        </ul>`
    },

    {
        title: "Pseudo-slicer algorithm",
        category: "Development",
        tags: ['Professional', 'Python', '3D printing', 'Matplotlib'],
        images: ["/pf/Slicer/0.jpg", "/pf/Slicer/1.jpg", "/pf/Slicer/2.jpg"],
        description:`<p>As a subproject of a Cura plugin I did, I had to write a Python program which would take a boundary condition (anchor or load) and convert it to gcode.</p>
        <p>The gcode lines would represent the surface's geometry, while also including metadata (load magnitude and direction).</p>`
    },

    {
        title: "Geolocation-based fertilizer with satellite data",
        category: "Mechatronics",
        tags: ['Professional', 'PLC', 'B&R', 'ST', 'C++', 'ISOBUS', 'Electronics'],
        images: ["/pf/Fertilizer/0.jpg", "/pf/Fertilizer/1.jpg"],
        description:`<p>Research project in which we developed a tractor implement capable of fertilizing a field according to a variable feedrate map, created from satellite images and downloaded over 4G directly in the field.</p>
        <p>I coded all the software and designed most of the electronics.</p>`
    },

    {
        title: "Exploratory data analysis of imprecise plastronics process",
        category: "Data Science",
        tags: ['Professional', 'Python', 'Pandas', 'Matplotlib'],
        images: ["/pf/PlastronicsEDA/1.jpg", "/pf/PlastronicsEDA/2.png", "/pf/PlastronicsEDA/3.png"],
        description:`<p>A departament in my company was experiencing poor precision with a machine that applied small drops of solderpaste on a plastronics circuit (an electronic circuit printed on a flexible sheet of plastic).</p>
        <p>I loaded data from many experiments, cleaned it, handled missing values, and performed feature engineering to facilitate analysis.
        Then I did an EDA and found that one of the features (the interchangeable nozzle) was correlated with a bias in the Y coordinate of the deposition.</p>
        <p>This project is a simple example of Data Science applied in a real setting.</p>`
    },

    {
        title: "Python simulator for trading strategies",
        category: "Development",
        tags: ['Personal', 'Python', 'Pandas', 'Matplotlib'],
        images: ["/pf/Backtrader/0.jpg", "/pf/Backtrader/1.png"],
        description:`<p>Backtrader program written in Python, used to test trading strategies on a large set of historical stock prices.</p>
        <p>My goal was to test and optimize a strategy which had been giving me good results using dummy trades with fake money, before I actually used real money.</p>
        <p>Unsurprisingly, I found out I'm not a genius stock trader and my strategy would have made me lose a lot of money.</p>`
    },

    {
        title: "gCode separator to walls, infill and helpers",
        category: "Development",
        tags: ['Professional', 'Python', '3D printing'],
        images: ["/pf/GcodeSeparator/1.png"],
        description:`<p>Script that separates a gCode file into 3 gCode files for walls, infill and helpers. It was a request from a client who needed it for a research project.</p>`
    },

    {
        title: "React Dashboard",
        category: "WebDev",
        tags: ['Personal', 'WebDev', 'React.js', 'HTML', 'CSS', 'JavaScript'],
        images: ["/pf/ReactDashboard/1.png", "/pf/ReactDashboard/2.png", "/pf/ReactDashboard/3.png", "/pf/ReactDashboard/4.png", "/pf/ReactDashboard/5.png", "/pf/ReactDashboard/6.png"],
        description:`<p>A simple static dashboard with day/night mode, pages with many different menus and graphics, and a main page with a summary of the pages.</p>
                     <p>Based on <a href="https://www.youtube.com/watch?v=wYpCWwD1oz0">this tutorial</a>.</p>`,
        github_link: "https://github.com/Tyronnosaurus/react-dashboard"
    },

    {
        title: "React repository for hikes and climbing routes",
        category: "WebDev",
        tags: ['Personal', 'WebDev', 'React.js', 'JavaScript', 'Tailwind', 'Next.js'],
        images: ["/pf/Tironades/1.png"],
        description:`<p>Small webapp I made for my father. He's been a prolific hiker and climber for decades and needed a repository to share many hikes and climbing routes.</p>`,
        live_link: "https://tironades.netlify.app/",
        github_link: "https://github.com/Tyronnosaurus/tironades"
    },

    {
        title: "React Tinder clone",
        category: "WebDev",
        tags: ['Personal', 'WebDev', 'React.js', 'HTML', 'CSS', 'JavaScript'],
        images: ["/pf/TinderClone/1.png", "/pf/TinderClone/2.png", "/pf/TinderClone/3.png", "/pf/TinderClone/4.png"],
        description:`<p>A simple Tinder clone where users can register, create a profile, and match and chat with each other. Data is stored on a MongoDB database through an API.</p>
                     <p>Based on <a href="https://www.youtube.com/watch?v=Q70IMS-Qnjk">this tutorial</a>.</p>`,
        github_link: "https://github.com/Tyronnosaurus/tinder-clone"
    },

    {
        title: "Node graph editor",
        category: "Development",
        tags: ['Personal', 'Python', 'Qt'],
        images: ["/pf/NodeGraph/0.png"],
        description:`<p>Node graph editor with Python & Qt (PySide6).</p>
                     <p>Based on <a href="https://www.youtube.com/watch?v=xbTLhMJARrk&list=PLZSNHzwDCOggHLThIbCxUhWTgrKVemZkz&index=1">the tutorial by Pavel Křupala</a>.</p>
                     <p>My goal is to use it to complement a workflow automation application that I want to develop.</p>`,
        github_link: "https://github.com/Tyronnosaurus/qt-node-graph"
    },

    {
        title: "Comic resizer with size anomaly detection",
        category: "Development",
        tags: ['Personal', 'Python', 'Qt'],
        images: ["/pf/ComicResizer/0.png"],
        description:`<p>Utility to batch resize all pages of a comic, with automatic detection of double pages and other size related anomalies.</p>
        <p>If smart resizing is enabled, pages which are considerably larger or smaller than the majority will not be resized to the user specified size, but rather to a proportional size based on its original ratio to the other pages.</p>`,
        github_link: "https://github.com/Tyronnosaurus/ComicResizer"
    },

    {
        title: "Comic chapter separator",
        category: "Development",
        tags: ['Personal', 'Python', 'Qt'],
        images: ["/pf/ComicProcessor/1.png", "/pf/ComicProcessor/2.png"],
        description:`<p>Utility to automatically separate a comic magazine or volume into individual files for each chapter. If possible, it will automatically scrap the table of contents from the internet to know the starting page of each chapter.</p>`
    },

    {
        title: "Automatic file organizer with Machine Learning",
        category: "Development",
        tags: ['Personal', 'Python', 'Pandas', 'scikit-learn', 'Qt'],
        images: ["/pf/FileOrganizer/1.png"],
        description:`<p>Utility to automatically organize files on a hierarchical folder structure.</p>
        <p>It allows the user to train a model on a collection of previously organized files. Each new file to organize has its filename analyzed and is given 4 possible destinations in decreasing order of confidence.</p>
        <p>I use it regularly and will probably continue to do so for the rest of my life.</p>`,
        github_link: "https://github.com/Tyronnosaurus/machine-learning-file-organizer"
    },

    {
        title: "Firefox extension: URL tagger",
        category: "WebDev",
        tags: ['Personal', 'WebDev', 'JavaScript'],
        images: ["/pf/image_not_available.png"],
        description:`<p>Firefox add-on, based on WebExtensions. It lets the user manually tag a website as 'Seen', 'Want', 'Reached', 'ToDo'... Links to that website will then be accompanied by the correpsonding icon.</p>
        <p>I made this mostly for self use, since I often find myself reading things I had already read years ago. The browsing history is useful but it eventually cleans old items (or else it would be gigantic). This extension serves me as a more permanent alternative.`,
        github_link: "https://github.com/Tyronnosaurus/site-tags"
    },

    {
        title: "Firefox extension: Zoom single item",
        category: "WebDev",
        tags: ['Personal', 'WebDev', 'JavaScript'],
        images: ["/pf/ZoomSingleItem/2.png", "/pf/ZoomSingleItem/3.jpg", "/pf/ZoomSingleItem/4.png"],
        description:`<p>Firefox add-on, based on WebExtensions. It lets the user permanently resize a single element in a website (including all pages in the same domain).</p>        
        <p>This could be useful for accessibility, or simply for when a very repetitive task is cumbersome due to constantly having to click very small items on a website.</p>`,
        github_link: "https://github.com/Tyronnosaurus/zoom-single-item"
    },

    {
        title: "Task tracker made in React",
        category: "WebDev",
        tags: ['Personal', 'WebDev', 'React.js', 'JavaScript'],
        images: ["/pf/ReactTaskTracker/1.jpg", "/pf/ReactTaskTracker/2.jpg"],
        description:`<p>Small webapp to schedule tasks. Made to learn about React, various React hooks, and React Router. Based on a tutorial by Traversy Media.</p>`,
        github_link: "https://github.com/Tyronnosaurus/react-task-tracker",
        live_link: "https://react-task-tracker-202303.netlify.app/"
    },

    {
        title: "Budget tracker made in React",
        category: "WebDev",
        tags: ['Personal', 'WebDev', 'React.js', 'JavaScript'],
        images: ["/pf/BudgetTracker/1.jpg"],
        description:`<p>Small webapp to create budgets and expenses. Made to learn about React, various React hooks, and React Router. Based on a tutorial by Traversy Media.</p>`,
        github_link: "https://github.com/Tyronnosaurus/budget-tracker",
        live_link: "https://budget-tracker-202303.netlify.app/"
    },

    {
        title: "React OpenAI Keyword Extractor",
        category: "WebDev",
        tags: ['Personal', 'WebDev', 'React.js', 'JavaScript'],
        images: ["/pf/KeywordExtractor/1.jpg", "/pf/KeywordExtractor/2.jpg"],
        description:`<p>Small webapp to extract the main keywords from a text. Made to learn about React and the OpenAI API. Based on a tutorial by Traversy Media.</p>`,
        github_link: "https://github.com/Tyronnosaurus/react-openai-keyword-extractor",
        live_link: "https://react-openai-keyword-extractor-202303.netlify.app/"
    },

    {
        title: "Injection machine data postprocessor",
        category: "Development",
        tags: ['Professional', 'C#'],
        images: ["/pf/CSV postprocessor/0.jpg"],
        description:`<p>A client contacted us about a bug: an old machine from our company was exporting large amounts of process data in the wrong format. I developed this small application to postprocess the data into a format they could work with.</p>`
    },

    {
        title: "Random file opener/shuffler",
        category: "Development",
        tags: ['Personal', 'C#'],
        images: ["/pf/RandomFileOpener/1.png", "/pf/RandomFileOpener/2.png"],
        description:`<p>Application that opens a random file within a folder/category. Useful when I'm in the mood for shuffling comics, music, etc. It also has many tools such as keyword search, deleting, file history, internet search, opening archives, sending to a "TO DO" folder, etc.</p>`
    },

    {
        title: "Self-hosted server",
        category: "DevOps",
        tags: ['Personal', 'Linux', 'Docker', 'WebDev', 'Wordpress'],
        images: ["/pf/Server/0.png"],
        description:` <p>Self-hosted server which I use or have used for the following services:</p>
        <ul>
            <li>VPN: To access my home network and to encrypt my traffic while on public networks.</li>
            <li>Webserver: runs Apache, PHP and MariaDB. Useful for hosting Wordpress websites.</li>
            <li>LVM (Logical Volume Manager): used to combine old HDDs into large units.</li>
            <li>Online File Server</li>
            <li>Backup storage</li>
            <li>DDNS: To point my domain adress(es) to my server even if it has a dynamic IP.</li>
        </ul>
        <p>It runs on Ubuntu Server. It was originally on a Raspberry Pi but nowadays I use a headless desktop PC built from spare parts.</p>`
    },

    {
        title: "Terraforming game",
        category: "Development",
        tags: ['Personal', 'GameDev', 'C#'],
        images: ["/pf/TerraformGame/0.png", "/pf/TerraformGame/1.png", "/pf/TerraformGame/2.png", "/pf/TerraformGame/3.png"],
        description:`<p>Ongoing Unity project in which I studied, refactored, and encapsulated <a href="https://www.youtube.com/watch?v=vTMEdHcKgM4">Sebastian Lague's Terraforming project</a> to be able to use it as a gameplay mechanism on a game I've planned.</p>
        <p>It uses the Marching Cubes algorithm to create a scenario with a deformable mesh. The player can dig tunnels and create mountains by modifying the underlying grid of numbers that make up the world with their Terraforming tool.</p>
        <p>It uses compute shaders, which means that the most CPU intensive parts of the world generation are delegated to the GPU and written in HLSL.</p>`,
    },

    {
        title: "'Here Be Dragons' flash game",
        category: "Development",
        tags: ['Personal', 'GameDev'],
        images: ["/pf/Here be dragons/0.png", "/pf/Here be dragons/1.jpg"],
        description:`<p>Tile-based action game using Flash.</p>
        <p>It was developed in a programming class by me and another student, and earned a 9/10 qualification.</p>
        <p>Check out the trailer (⚠️ Warning: it's pretty loud at the beginning! ⚠️):</p>
        <br>
        <iframe style="margin:auto;" width="560" height="315" src="https://www.youtube.com/embed/L3Q6C7F_F30?si=WQMCx3Tm240pXkep" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <br>`,
    },

    {
        title: 'Closed loop force control injection system',
        category: "Mechatronics",
        tags: ['Professional', 'PLC', 'B&R', 'ST'],
        images: ["/pf/Force Control/forceloop.png", "/pf/Force Control/forcesensor.png"],
        description:`<p>During the development of an injection molding method with very low residence time, I encountered the following problem: a piston was supposed to push plastic at a precise force as it melted, but the servo that moved the piston could only control its own torque, not the actual force after considering losses in the transmission.</p>
        <p>After installing a pressure sensor at the piston, I developed the PI controller shown.</p>
        <p>The implementation was particularly tricky as the plastic being pushed was continuously melting and flowing into the mold cavities. This led to the piston having to stop and start multiple times per second, meaning that static and dynamic frictions had to be considered, as well as backlash and other problems.</p>`
    },

    {
        title: "Robot arm interface for injection molding machine",
        category: "Mechatronics",
        tags: ['Professional', 'PLC', 'B&R', 'ST', 'C++'],
        images: ["/pf/S1G/robotarm.jpg"],
        description:`<p>Following the Euromap 67 standard, I implemented an interface for a robot arm to unload the manufactured plastic parts of the S1G injection molding machine.
        This would allow our clients to integrate the machine into complex automated manufacturing processes and was a main selling point for our biggest potential buyers.</p>`
    },

    {
        title: "Dynamic Heating & Cooling system for improved plastic injection",
        category: "Mechatronics",
        tags: ['Professional', 'PLC', 'B&R', 'ST', 'C++'],
        images: ["/pf/S1G/heating_cooling.png"],
        description:`<p>I implemented an interface and parametrized algorithm to dynamically heat and cool the mold of a plastic injection machine on every cycle, following the parameters set by the user (temperatures, times and speed of change).</p>`
    },

    {
        title: "Capacitance meter",
        category: "Electronics",
        tags: ['Personal', 'Arduino', 'Electronics', 'C++'],
        images: ["/pf/Capacitance meter/Capacitance meter.jpg"],
        description:`<p>Simple tool to calculate the capacity of unmarked capacitors. I needed it because I salvage many capacitors from old appliances.</p>`
    },

    {
        title: "CNC machine design",
        category: "Mechatronics",
        tags: ['Personal', 'SolidWorks'],
        images: ["/pf/CNC/CNC.jpg", "/pf/CNC/x-axis.jpg", "/pf/CNC/HotWire.jpg", "/pf/CNC/Box.jpg"],
        description:`<p>Design of a multi-function CNC machine that I did with four other people for an MSc in Mechatronics. Among other objectives, this machine had to be able to be converted to perform these functions:</p>
        <ul>
            <li>Milling</li>
            <li>Laser engraving</li>
            <li>Drawing with a pen tool</li>
            <li>Painting with an air brush</li>
            <li>Cutting with a hot wire (by attaching a second machine in vertical position)</li>
        </ul>
        <p>Apart from a basic 3D design, the project included tasks such as a market study, alternatives comparison, design brainstorming, forces analysis, tool geometry design, motors selection, etc.</p>`
    },

    {
        title: "Mechatronics Eye for the Hocus Pocus' Book of Spells",
        category: "Electronics",
        tags: ['Personal', 'SolidWorks', '3D printing', 'C++', 'Electronics', 'Arduino'],
        images: ["/pf/MechatronicsEye/vid1.gif", "/pf/MechatronicsEye/1.jpg", "/pf/MechatronicsEye/2.jpg", "/pf/MechatronicsEye/3.jpg", "/pf/MechatronicsEye/4.jpg", "/pf/MechatronicsEye/5.jpg"],
        description:`<p>This is a "living" book with an eye, much like the Book of Spells that the Sanderson Sisters posses in the movie Hocus Pocus.</p>
                     <p>It wakes up when the book is shaken thanks to a vibration sensor. The eye can rotate horizontally and vertically, and the two eyelids
                     move independently. Unlike other mechatronic eyes designs, this one places the servos on a single plane in order to be as flat as
                     possible and fit inside the hollow book.</p>

                     <p>It was a birthday present for a crafty friend who will add the actual cover decorations. To present the gift, I hid it and made my friend
                     recite a spell from the movie (<a href="https://www.youtube.com/watch?v=o7p0BNt7NHs">"Booook, come home or make thyself known"</a>). At that point,
                     I turned off the lights in the room and activated the LEDs inside the book with a hidden remote control, so that she could find it in the darkness.</p>`,
    },

    {
        title: "Blog for Airsoft DIY projects",
        category: "WebDev",
        tags: ['Personal', 'WebDev', 'Wordpress'],
        images: ["/pf/AirsoftDIY/airsoftdiy_scrnsht.png"],
        description:`<p>Blog featuring many DIY projects for airsoft enthusiasts. While I no longer practice it, I still have many projects and knowledge to write a good amount of posts.</p>
        <p>Some of these projects are personal, and they are shown as a full tutorial. Others are random internet finds, and they are shown as articles with proper attribution.</p>
        <p>The website has been developed in WordPress, with slight modifications in the visual theme and many professional practices (SEO, analytics, proper backup, media organization…). It is no longer online.</p>`,
    },

    {
        title: "Airsoft Claymore - 3D printed Chassis",
        category: "Mechatronics",
        tags: ['Personal', 'SolidWorks', '3D printing'],
        images: ["/pf/Airsoft Claymore/Front.jpg", "/pf/Airsoft Claymore/Front open.jpg", "/pf/Airsoft Claymore/Back.jpg",
                 "/pf/Airsoft Claymore/Back open.jpg", "/pf/Airsoft Claymore/3D exploded.png", "/pf/Airsoft Claymore/3D Front.png",
                 "/pf/Airsoft Claymore/3D Front open.png", "/pf/Airsoft Claymore/3D Back open.png"],
        description:`<p>Spring-loaded airsoft trap with autonomous movement detection and remote control. In an Airsoft match, when a member of the opposite team walks in front of the trap, the front panel opens and dozens of plastic balls are shot forwards, at which point he is eliminated from the game.<p>
        <p>It consists of a box with a double mouse trap mechanism. The entire body is 3D printed except for wood bars which give it structural integrity against the strong springs.</p>
        <p>The device is 100% functional and was used successfully in real matches.</p>
        <p>The electronic board and its features are described in another project.</p>`,
        github_link: "https://github.com/Tyronnosaurus/diy-airsoft-claymore"
    },

    {
        title: "Airsoft Claymore - Electronics board",
        category: "Electronics",
        tags: ['Personal', 'C++', 'Electronics', 'Arduino', 'Altium'],
        images: ["/pf/Airsoft Claymore PCB/pcb-v3-2.png", "/pf/Airsoft Claymore PCB/MountedPCB.jpg", "/pf/Airsoft Claymore/Back open.jpg",
                 "/pf/Airsoft Claymore PCB/pcb-top.png", "/pf/Airsoft Claymore PCB/remote.jpg"],
        description:`<p>Electronic controller for the 3D printed Airsoft Claymore (described in another project). It has the following features:</p>
        <ul>
            <li>Autonomous mode with motion sensor.</li>
            <li>Can be controlled remotely to enable/disable the motion sensor, fire manually, or check range in case the user is hidden very far.</li>
            <li>Can be controlled with onboard button in case the remote is lost or has no battery.</li>
            <li>Many battery saving techniques. Consumes less than 10 μA while in use.</li>
            <li>Light & sound feedback.</li>
            <li>SPI programmer connector.</li>
        </ul>
        <p>It was developed to improve my design skills and practice with Altium Designer.</p>
        <p>The device is 100% functional and was used successfully in real matches.</p>`,
        github_link: "https://github.com/Tyronnosaurus/diy-airsoft-claymore"
    },

    {
        title: "Semi-automated assembly line",
        category: "Mechatronics",
        tags: ['Personal', 'SolidWorks', 'PLC', 'Ladder'],
        images: ["/pf/Claymore production line/production line.png"],
        description:`<p>This project was developed as the final project for an MSc in Mechatronics. It includes:</p>
        <ul>
            <li>Redesign of an existing product to conform to manufacturing standards.</li>
            <li>3D design of the assembly line.</li>
            <li>Control system of sensors & actuators using Schneider's Unity Pro XL environment for PLC control with Ladder and GRAFCET.</li>
        </ul>`
    },

    {
        title: "Modular security system",
        category: "Electronics",
        tags: ['Personal', 'Arduino', 'C++', '3D printing', 'Electronics'],
        images: ["/pf/Security system/20150531_223234.jpg", "/pf/Security system/20150530_023521.jpg", "/pf/Security system/20150517_153558.jpg",
                 "/pf/Security system/20150529_115214.jpg", "/pf/Security system/20150526_001551.jpg"],
        description:`<p>Set of five functional devices to protect homes and business against robberies. The system is scalable and makes use of various technologies: wireless RF communications, PIR movement detection, RFID identification, etc. It contains approximately 3000 lines of C++ code written by me, plus many public libraries.<p>
        <p>While all modules are in their breadboard phase, one of them has been redesigned as a soldered circuit inside a 3D printed enclosure, making it adequate for real use.</p>
        <p>It was presented as my final engineering project and earned a 10/10 grade.</p>`,
        github_link:"https://github.com/Tyronnosaurus/arduino-alarm-system"
    },

    {
        title: "Buck converter for laptop batteries",
        category: "Electronics",
        tags: ['Personal', 'Electronics'],
        images: ["/pf/Buck converter/0.jpg"],
        description:`<p>Driver based on a DC-DC Buck converter. It reduces the unreliable 12 V of a typical laptop battery to a stable 5 V. It works at a wide range of currents (1 to 10 A).</p>
        <p>This project was presented in a power electronics class.</p>`
    },

    {
        title: "ISP breakout board",
        category: "Electronics",
        tags: ['Personal', 'Electronics', 'KiCAD'],
        images: ["/pf/ISP breakout board/20151020_192511.jpg", "/pf/ISP breakout board/20151020_192435.jpg", "/pf/ISP breakout board/gerber.png"],
        description:`<p>PCB that makes it easy to program standalone ATtiny44, 45, 84 and 85 chips with an ISP programmer.</p>
        <p>It was designed from scratch and ordered from a fabhouse in order to practice designing PCBs and to help in future projects.</p>`
    },

    {
        title: "Motion detection alarm",
        category: "Electronics",
        tags: ['Personal', 'Electronics', 'C++', 'Arduino', 'KiCAD'],
        images: ["/pf/Motion detection alarm/1.jpg", "/pf/Motion detection alarm/2.jpg", "/pf/Motion detection alarm/pcb.png"],
        description:`<p>Small battery powered PIR sensor for my front door. It can run for more than one year on three AA batteries. Upon detection, it triggers a loud buzzer and can send an RF signal to other modules.<p>
        <p>This project was made to practice these skills:</p>
        <ul>
            <li>Converting an Arduino project to a standalone board</li>
            <li>PCB design and manufacturing</li>
            <li>Low power design</li>
        </ul>`
    },

    {
        title: "Keychain mass production machine",
        category: "Mechatronics",
        tags: ['Personal'],
        images: ["/pf/Keychain machine/0.jpg", "/pf/Keychain machine/1.jpg", "/pf/Keychain machine/2.jpg", "/pf/Keychain machine/3.jpg",
                 "/pf/Keychain machine/4.jpg", "/pf/Keychain machine/5.jpg"],
        description:`<p>Station with many pneumatic actuators that stamped, drilled and burned wood pieces into the desired design.<p>
        <p>It was presented as my final high-school project, and earned a 10/10 qualification. Most of the design was done by one of my teachers, and I built it and prepared the full documentation.</p>
        <p>See more in <a href="https://www.youtube.com/watch?v=PdXk931gd-0">this video</a>.</p>`
    },

    {
        title: "PID line follower",
        category: "Electronics",
        tags: ['Personal', 'C++', 'Arduino', 'Electronics'],
        images: ["/pf/PID line follower/1.jpg", "/pf/PID line follower/2.jpg", "/pf/PID line follower/3.jpg", "/pf/PID line follower/4.gif"],
        description:`<p>Small car prepared to follow a line on the floor. It uses a closed loop system to improve its performance. The PID parameters can be set during runtime thanks to a remote control and an onboard LCD screen.<p>
        <p>It was developed in a control systems class. The project only required a Lego Mindstorm prototype, but I decided to use generic components I owned in order to have a bigger scope. The final test was a race based championship with my peers, in which it got first place and earned a 10/10 qualification.</p>`
    },

    {
        title: "RC car with differential steering",
        category: "Electronics",
        tags: ['Personal', 'C++', 'Arduino', 'Electronics'],
        images: ["/pf/RC car/1.jpg"],
        description:`<p>Differential steering, also known as skid steering, is accomplished by independently controlling the speed of the right and left wheels. This gives the vehicle a better maneuverability as it can turn around in place.</p>
        <p>This car is essentially a wheeled platform for future accessories.</p>
        <p>This project was built for fun.</p>`
    },

    {
        title: "Remote controlled ball launcher",
        category: "Mechatronics",
        tags: ['Personal', 'SolidWorks'],
        images: ["/pf/Ball launcher/balllauncher.png", "/pf/Ball launcher/launchermechanism.png"],
        description:`<p>This is a design for a semiautomatic ball launcher that can be attached to a remotely controlled car I had previously developed.</p>
        <p>The rack and pinion mechanism with missing teeth, typical of airsoft gearboxes, retracts the platform and compresses the springs. When the last tooth is reached, the compression is released and the ball propelled. The microswitch stops the motor after a revolution is completed.</p>`
    },

    {
        title: "Seamless highway incorporation protocol for self-driving cars",
        category: "Electronics",
        tags: ['Personal', 'C++', 'Arduino'],
        images: ["/pf/Incorporation protocol/track.jpg"],
        description:`<p>A protocol which would allow an autonomous car to enter a highway without the need of a direct line of sight of incoming traffic.</p>
        <p>The car outside the highway first requests data about the position and speed of cars in the right lane. This data is provided either by a sensor network on the road or directly by the cars themselves. Then, the incorporating car calculates the probability of causing an accident and accelerates or slows down accordingly.</p>
        <p>This system is mostly intended for autonomous cars, but the relayed information could still be a useful cue for human drivers in low visibility conditions.</p>
        <p>This project was made during a hackathon by me and two other participants.</p>`
    },

    {
        title: "Remotely operated surgical robot",
        category: "Electronics",
        tags: ['Personal', 'Electronics'],
        images: ["/pf/Surgical robot/0.jpg"],
        description:`<p>Robot capable of moving a tool according to instructions sent over the internet.</p>
        <p>It was a 4 member team's entry into a robotics competition to design an upscaled prototype of a robot capable of performing eye surgery. It won first place.</p>`
    },

    {
        title: "7-segment multiplexed clock",
        category: "Electronics",
        tags: ['Personal', 'C++', 'Arduino', 'Electronics'],
        images: ["/pf/7 segment clock/0.jpg", "/pf/7 segment clock/1.jpg", "/pf/7 segment clock/2.jpg"],
        description:`<p>A clock that makes use of multiplexing with shift registers, and stores the time in an RTC.<p>
        <p>This project was made for fun.</p>`
    },

    {
        title: "Recycled laptop monitor",
        category: "Electronics",
        tags: ['Personal', '3D printing', 'SolidWorks'],
        images: ["/pf/Recycled monitor/0.jpg", "/pf/Recycled monitor/1.jpg", "/pf/Recycled monitor/2.jpg"],
        description:`<p>Secondary PC screen recycled from a broken laptop. It has two 3D printed bases at 0º and 15º orientations for better visibility. Additionally, the electronic boards are mounted on 3D printed enclosures that protect the user from the high voltage needed to drive the screen's fluorescent backlight.<p>
        <p>This project was made to reduce electronic waste and for fun.</p>`
    },

    {
        title: "Suitcase wheel replacement",
        category: "Mechatronics",
        tags: ['Personal', '3D printing', 'SolidWorks'],
        images: ["/pf/SuitcaseWheel/0.jpg", "/pf/SuitcaseWheel/1.jpg"],
        description:`<p>A simple repair for a travel suitcase whose wheel had broken. It worked well for a few short trips but I never dared take it on a long travel. It was mostly for practicing 3D design.</p>`
    },

    {
        title: "MP3 player clip repair",
        category: "Mechatronics",
        tags: ['Personal', '3D printing', 'SolidWorks'],
        images: ["/pf/Mp3Repair.jpg"],
        description:`<p>The clip in my Sansa Clip+ broke, so I made this because this little guy is the best MP3 player in the world and I want it to outlive me. The player snaps in without glue, and it has endured years of abuse without issue. The screw is just to ensure layer adhesion in case I drop it.</p>`
    },

    {
        title: "Access control system based on facial recognition",
        category: "Development",
        tags: ['Personal', 'Arduino', 'Electronics', '3D printing'],
        images: ["/pf/Access facial recognition/0.jpg"],
        description:`<p>Prototype made with an Intel Joule board (to monitor the camera and recognize faces) and an Arduino 101 (to control sensors and actuators).</p>
        <p>It was developed in 30 hours during the 2016 Barcelona IoT Solutions World Congress Hackathon by me and three other participants.</p>`
    },

    {
        title: "EMF meter",
        category: "Electronics",
        tags: ['Personal', 'C++', 'Arduino', 'Electronics'],
        images: ["/pf/EMF meter/0.jpg", "/pf/EMF meter/1.jpg"],
        description:`<p>Electromagnetic fields detector. It reacts to screens, AC appliances and cables, etc.</p>
        <p>It was made for fun by making a few modifications to <a href="http://www.instructables.com/id/Attiny-45-EMF-Sensor/">this tutorial</a>.</p>`
    },

    {
        title: "Dummy sound grenade for airsoft",
        category: "Electronics",
        tags: ['Personal', 'C++', 'Arduino', 'Electronics', 'SolidWorks', '3D printing'],
        images: ["/pf/Sound grenade/0.jpg", "/pf/Sound grenade/1.jpg", "/pf/Sound grenade/2.jpg"],
        description:`<p>A device for paintball and airsoft players. Commercial grenades have to be refilled with CO2 capsules every time they are used. This electric model aims to be more economical since it can be used hundreds of times on a single coin cell charge.</p>
        <p>It was developed to test whether or not I could make a commercial product. Because of this, the design was reworked many times in order to make the enclosure resistant to typical use, and also ensure the electronics inside were reliable.</p>`
    },

    {
        title: "Portfolio",
        category: "WebDev",
        tags: ['Personal', 'WebDev', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js', 'Tailwind'],
        images: ["/pf/Portfolio/0.jpg", "/pf/Portfolio/1.jpg"],
        description:`<p>A website where I showcase my projects. It allows filtering by tags, and shows a popup with more info whenever an entry is clicked.</p>
        <p>It has had many revisions over the years. I've redone it from scratch in three different technologies:
        <ul>
            <li>Wordpress</li>
            <li>Pure HTML, CSS and Javascript, with some Bootstrap features such as Modal and Carousel.</li>
            <li>React, Tailwind</li>
        </ul>`,
        github_link: "https://github.com/Tyronnosaurus/etiron-portfolio2"
    },
    
    {
        title: "Safety goggles defogger (handheld)",
        category: "Electronics",
        tags: ['Personal', 'SolidWorks', '3D printing', 'Electronics'],
        images: ["/pf/Defogger/0.jpg"],
        description:`<p>Airsoft players must always wear safety goggles. This, combined with the constant sweating, means that fogged goggles is a constant problem.</p>
        <p>I developed a handheld defogger which, at the press of a button, forces air circulation inside the goggles to quickly defog them in about 5 seconds.
        The player can carry it in a pocket and press it on their forehead when needed.</p>`
    },

    {
        title: "Safety goggles defogger (mounted)",
        category: "Electronics",
        tags: ['Personal', 'SolidWorks', '3D printing', 'Electronics'],
        images: ["/pf/Defogger v2/1.jpg", "/pf/Defogger v2/2.png"],
        description:`<p>Airsoft players must always wear safety goggles. This, combined with the constant sweating, means that fogged goggles is a constant problem.</p>
        <p>I improved my previously designed handheld defogger to mount it directly on the most popular goggles used by airsoft players. At the press of a button, it forces
        air circulation inside the goggles to quickly defog them in about 5 seconds.</p>`
    },

    {
        title: "Terminator sunglasses",
        category: "Electronics",
        tags: ['Personal', 'Electronics'],
        images: ["/pf/TerminatorGlasses/0.jpg"],
        description:`<p>Sunglasses with an LED, a resistor, a coin cell, and a switch in a quickly soldered board. Probably (definitely) the simplest project in this portfolio.</p>`
    }
    
]

