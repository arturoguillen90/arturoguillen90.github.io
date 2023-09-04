let dictionarySpanish = {
    profile: "Trabajo en informática como profesional desde hace 8 años, he colaborado en muchos proyectos de TI en diferentes áreas de negocio (publico/privado) integrando equipos con diversos requerimientos y personas, siempre logrando integrarme de manera positiva y dinámica, aportando esfuerzo e ideas que contribuyan al alcance de las metas y objetivos en los tiempos definidos. Por otro lado, durante estos años he desarrollado y mejorado poco a poco mis habilidades personales y profesionales, buscando dar lo mejor siempre en mi trabajo.",
    printHtml: "Imprimir este CV ...",
    downloadPDF: "Descargar este CV en PDF ...",
    btnLanguage: "Cambiar a inglés",
    workExperience: "Experiencia",

    workExperienceHeader0: "Middle Software Engineer",
    workExperienceDate0: "SGM | 2023(Enero) - Present",
    workExperienceDescription0: "Trabajando en análisis, diseño, programación, pruebas, mantenimiento, implementación, mejora, soporte de sistemas, bases de datos.",

    workExperienceHeader1: "Profesor",
    workExperienceDate1: "UCR | 2022(mar) - Presente",
    workExperienceDescription1: "Conceptos, análisis y desarrollo de la planificación estratégica del área de TI, alineamiento de TI con el plan estratégico de la organización, visión general de la organización del departamento de TI, selección de proyectos, planes de contingencia, análisis de presupuesto y metodologías de compra de tecnología.",

    workExperienceHeader2: "Middle Software Engineer",
    workExperienceDate2: "Crux | 2020(mar) - Presente",
    workExperienceDescription2: "Trabajando en análisis, diseño, programación, pruebas, mantenimiento, implementación, mejora, soporte de sistemas, bases de datos.",

    workExperienceHeader3: "Full Stack Developer",
    workExperienceDate3: "INEC | 2017(jun) - 2020(feb)",
    workExperienceDescription3: "Departamento de TI, realizando funciones de análisis, diseño, programación, pruebas, mantenimiento y evolución, implementación, soporte de sistemas, bases de datos.",

    workExperienceHeader4: "Full Stack Developer",
    workExperienceDate4: "Grupo Colono | 2015(ene) - 2017(may)",
    workExperienceDescription4: "Departamento de TI (Costa Rica, Panamá, Nicaragua y Honduras), realizando funciones de soporte de sistemas, programación, análisis de sistemas y bases de datos.",
    
    skills: "Habilidades",
    skillsTechnical: "Técnico",
    skillTechnical1: "JS/React/TypeScript/Node.js",
    skillTechnical2: "HTML5/CSS3/Boostrap",
    skillTechnical3: "C#/Java/Python ",
    skillTechnical4: "GIT/REST/JSON",
    skillTechnical5: "SQLServer/SSRS/SSIS",
    skillTechnical6: "Scrum/TDD/SOLID/CI-CD",
    skillTechnical7: "Diseño orientado a objetos",
    skillTechnical8: "Diseñar e implementar estructuras de bases de datos",
    skillTechnical9: "Liderar y entregar sistemas de software complejos",

    skillsProfessional: "Profesional",
    skillProfessional1: "Comunicación efectiva",
    skillProfessional2: "Trabajo en equipo",
    skillProfessional3: "Fuerte solución de problemas",
    skillProfessional4: "Buena administración del tiempo",

    languages: "Idiomas",
    language1: "Español (Nativo)",
    language2: "Inglés (Profesional 50%)",

    interests: "Intereses",
    interest1: "Familia",
    interest2: "Deportes",
    interest3: "Trabajo",
    interest4: "Aprender",
    interest5: "Viajes",
};

let dictionaryEnglish = {
    profile: "I have been working in IT for more than seven years, I have collaborated in many IT projects, managing to integrate myself into the work teams in a positive and dynamic way, contributing effort and ideas that contribute to the achievement of the goals and objectives in the defined times. I have gradually developed my personal and professional skills, seeking to always give my best in my work. ",
    printHtml: "Print this CV ...",
    downloadPDF: "Download this CV in PDF ...",
    btnLanguage: "Change to spanish",
    workExperience: "Work Experiences",

    workExperienceHeader0: "Middle Software Engineer",
    workExperienceDate0: "SGM | 2023(Enero) - Present",
    workExperienceDescription0: "Working on analysis, design, programming, testing, maintenance, implementation, improvement, systems support, databases.",

    workExperienceHeader1: "Teacher",
    workExperienceDate1: "UCR | 2022(mar) - Present",
    workExperienceDescription1: "Concepts, analysis and development of the strategic planning of the IT area, alignment of IT with the strategic plan of the organization, overview of the organization of the IT department, project selection, contingency plans, budget analysis and methodologies to purchase technology.",

    workExperienceHeader2: "Middle Software Engineer",
    workExperienceDate2: "Crux | 2020(mar) - Present",
    workExperienceDescription2: "Working on analysis, design, programming, testing, maintenance, implementation, improvement, systems support, databases.",

    workExperienceHeader3: "Full Stack Developer",
    workExperienceDate3: "INEC | 2017(jun) - 2020(feb)",
    workExperienceDescription3: "IT Department, performing functions of analysis, design, programming, testing, maintenance and evolution, implementation, systems support, databases.",
    
    workExperienceHeader4: "Full Stack Developer",
    workExperienceDate4: "Grupo Colono | 2015(jan) - 2017(may)",
    workExperienceDescription4: "IT Department (Costa Rica, Panama, Nicaragua and Honduras), performing systems support functions, programming, systems analysis and databases.",
    
    skills: "Skills",
    skillsTechnical: "Technical",
    skillTechnical1: "JS/React/TypeScript/Node.js",
    skillTechnical2: "HTML5/CSS3/Boostrap",
    skillTechnical3: "C#/Java/Python ",
    skillTechnical4: "GIT/REST/JSON",
    skillTechnical5: "SQLServer/SSRS/SSIS",
    skillTechnical6: "Scrum/TDD/SOLID/CI-CD",
    skillTechnical7: "Object-oriented design",
    skillTechnical8: "Design and implement database structures",
    skillTechnical9: "Lead and deliver complex software systems",

    skillsProfessional: "Professional",
    skillProfessional1: "Effective communication",
    skillProfessional2: "Team player",
    skillProfessional3: "Strong problem solver",
    skillProfessional4: "Good time management",  

    languages: "Languages",
    language1: "Spanish (Native)",
    language2: "English (Professional 50%)",

    interests: "Interests",
    interest1: "Family",
    interest2: "Sports",
    interest3: "Work",
    interest4: "Learn",
    interest5: "Travels",
};


$(document).ready(function () {

    $('#checkDarkMode').prop('checked', false);
    ChangeLanguageToSpanish();

    $("#btnLanguage").click(function () {
        let lang = $("html").attr("lang");

        let dictionary;
        if (lang == "en") {
            dictionary = dictionarySpanish;
            $("html").attr("lang", "es");
        }
        else if (lang == "es") {
            dictionary = dictionaryEnglish;
            $("html").attr("lang", "en");
        }

        Object.entries(dictionary).forEach(([key, value]) => {
            $("#" + key).text(value);
        });

    });

    $("#checkDarkMode").change(function () {
        if (this.checked) {
            /*DARK MODE ACTIVATED ... */
            $("body").addClass("themeDark");

            $(function () {
                $("body .theme-link").each(function () {
                    $(this).addClass("theme-nothing");
                    $(this).removeClass("theme-link");
                });

                $(".item-title").each(function () {
                    $(this).addClass("themeDarkh4");
                });

                $(".item-meta").each(function () {
                    $(this).addClass("themeDarkh4");
                    $(this).removeClass("text-muted");
                });

                $(".themeDarkh5").each(function () {
                    $(this).addClass("themeDarkh4");
                    $(this).removeClass("text-muted");
                });


            });


        } else {
            /*LIGHT MODE ACTIVATED ... */
            $("body").removeClass("themeDark");
            $(function () {
                $("body .theme-nothing").each(function () {
                    $(this).addClass("theme-link");
                    $(this).removeClass("theme-nothing");;
                });


                $(".item-title").each(function () {
                    $(this).removeClass("themeDarkh4");
                });

                $(".item-meta").each(function () {
                    $(this).addClass("text-muted");
                    $(this).removeClass("themeDarkh4");
                });

                $(".themeDarkh5").each(function () {
                    $(this).addClass("text-muted");
                    $(this).removeClass("themeDarkh4");
                });

            });

        }
    });


});


function ChangeLanguageToSpanish() {

    let   dictionary = dictionarySpanish;
    $("html").attr("lang", "es");

    Object.entries(dictionary).forEach(([key, value]) => {
        $("#" + key).text(value);
    });

}