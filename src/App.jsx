export default function Portfolio() {
  const projects = [
    {
      title: "Real-Time Face Segmentation for Movie Cast Identification",
      description:
        "Built a real-time face segmentation and identification system using OpenCV and Streamlit for movie cast detection and visualization.",
      tech: ["Python", "OpenCV", "Computer Vision", "Streamlit"],
      github: "https://github.com/Sedhuk/face-segmentation.git",
    },
    {
      title: "IMDb Recommendation System",
      description:
        "Developed a movie recommendation engine using NLP, TF-IDF vectorization, and cosine similarity techniques.",
      tech: ["Python", "NLP", "TF-IDF", "Streamlit"],
      github: "https://github.com/Sedhuk/imdb-movie-recommender.git",
    },
    {
      title: "Swiggy Recommendation System",
      description:
        "Performed EDA and built a restaurant recommendation system based on cuisines, ratings, and pricing.",
      tech: ["Python", "Pandas", "EDA", "Scikit-learn"],
      github: "https://github.com/Sedhuk/Swiggy-Recommendation.git",
    },
    {
      title: "Nutri Classification",
      description:
        "Machine learning based nutrition classification project focused on intelligent food categorization and prediction.",
      tech: ["Python", "Machine Learning", "Classification"],
      github: "https://github.com/Sedhuk/NutriClass.git",
    },
    {
      title: "Stock Market Analysis",
      description:
        "Analyzed stock market datasets and generated insights through visualization and trend analysis.",
      tech: ["Python", "Data Analysis", "Visualization"],
      github: "https://github.com/Sedhuk/Stock-Market-Analysis.git",
    },
  ];

  const skills = [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "NLP",
    "OpenCV",
    "Streamlit",
    "React.js",
    "GitHub",
    "Data Visualization",
    "Scikit-learn",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1e3a8a,transparent_35%),radial-gradient(circle_at_bottom_left,#7c3aed,transparent_30%)] opacity-30"></div>

      <div className="relative z-10 px-6 md:px-16 py-10">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center min-h-[90vh]">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
              <img
                src="/profile.png"
                alt="Sedhu Madhavan"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400/30 shadow-2xl"
              />
            </div>
          </div>

          <div>
            <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-4">
              Data Science
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Sedhu
              <span className="text-cyan-400"> Madhavan</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
              Aspiring Data Scientist
            </h2>

            <p className="text-lg text-gray-400 leading-8 max-w-xl mb-8">
              Building intelligent and data-driven solutions using Data Science,
              Machine Learning, and Python with a strong foundation in software
              development and real-time problem solving. Experienced in Customer
              Success Engineering and Frontend Web Application Development, with
              hands-on exposure to client handling, application development,
              analytics, and workflow optimization. Passionate about transforming
              raw data into meaningful insights through Machine Learning, NLP,
              Computer Vision, and Data Visualization techniques. Continuously
              learning and exploring modern AI technologies to develop scalable
              and impactful intelligent systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Sedhuk"
                target="_blank"
                className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sedhuk001"
                target="_blank"
                className="px-6 py-3 rounded-2xl border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition"
              >
                LinkedIn
              </a>

              <a
                href="https://drive.google.com/file/d/15q1AsfcpscxLgxJ4MsTmNfURws1SoSg5/view?usp=sharing"
                target="_blank"
                className="px-6 py-3 rounded-2xl border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black transition"
              >
                Resume
              </a>
            </div>
          </div>


        </section>

        {/* About Section */}
        <section className="py-20">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">About Me</h2>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-xl space-y-6">
            <p className="text-gray-300 text-lg leading-9">
              I am an aspiring Data Scientist and Python Developer with 4 years
              of professional experience spanning Customer Success Engineering
              and Frontend Web Application Development. During my professional
              journey, I worked on multiple real-time projects involving client
              communication, issue resolution, workflow optimization, and
              responsive web application development using React.js and
              JavaScript. These experiences helped me develop strong analytical
              thinking, adaptability, communication, and problem-solving
              abilities in fast-paced environments.
            </p>
            <p className="text-gray-300 text-lg leading-9">
              Over time, my interest gradually shifted toward Data Science,
              Machine Learning, and Artificial Intelligence, where I became
              passionate about understanding how data can be used to build
              intelligent systems and improve decision-making processes. To
              strengthen my transition into the Data Science domain, I completed
              professional training in Python, Data Analysis, Machine Learning,
              NLP, and Data Visualization, while also building several practical
              projects to gain hands-on experience.
            </p>
            <p className="text-gray-300 text-lg leading-9">
              My projects include a Real-Time Face Segmentation and Movie Cast
              Identification system using OpenCV and Computer Vision, an IMDb
              Movie Recommendation System using NLP, TF-IDF, and Cosine
              Similarity, a Swiggy Restaurant Recommendation System focused on
              EDA and recommendation logic, and additional projects related to
              Nutrition Classification and Stock Market Analysis. Through these
              projects, I gained practical exposure to data preprocessing,
              exploratory data analysis, machine learning workflows,
              recommendation systems, and interactive application development
              using Streamlit.
            </p>
            <p className="text-gray-300 text-lg leading-9">
              I am particularly interested in domains such as Machine Learning,
              NLP, Computer Vision, Recommendation Systems, and Data Analytics.
              I enjoy solving real-world problems using data-driven approaches
              and continuously improving my technical and analytical skills by
              exploring new tools, frameworks, and AI technologies.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-2xl bg-white/5 border border-cyan-400/20 text-cyan-200 hover:scale-105 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="py-20">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400 transition-all shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-xl text-sm bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  className="inline-block px-5 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="py-20">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">Experience</h2>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-2">
              Customer Success Engineer / Frontend Developer
            </h3>
            <p className="text-cyan-300 mb-6">Pillir | 2022 - 2026</p>
            <ul className="space-y-4 text-gray-300 leading-8">
              <li>• Worked on multiple client and internal projects with on-time delivery.</li>
              <li>• Developed responsive frontend applications using React.js and JavaScript.</li>
              <li>• Collaborated with teams to improve workflow systems and user experience.</li>
              <li>• Built strong analytical and communication skills through customer-facing roles.</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-xl">
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-300 text-lg mb-8">
              Interested in Data Science, Machine Learning, Python Development,
              and intelligent systems.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-5">
              <a
                href="mailto:sedhu.k001@gmail.com"
                className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold"
              >
                sedhu.k001@gmail.com
              </a>
              <a
                href="tel:8072823881"
                className="px-6 py-3 rounded-2xl border border-cyan-400 text-cyan-300"
              >
                +91 8072823881
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
