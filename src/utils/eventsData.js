// utils/eventsData.js
export const eventData = [
  {
    title: "Technical Events",
    description:
      "Dive into the world of technology with our cutting-edge technical events. From coding challenges to hardware hacking, showcase your technical prowess.",
    backgroundImage: "https://picsum.photos/240/320?random=1",
    details: [
      {
        name: "Tech Escape Room",
        time: "45 minutes",
        venue: "Computer Lab",
        participants: "Teams of 4-6",
        entryFee: "₹100 per team",
        prizes: "Trophy and Certificates",
        description:
          'A tech-themed treasure hunt inside a lab where participants solve puzzles and challenges to "escape."',
        mode: "Offline",
        type: "Group (of 4-6)",
        prizeMoney: { first: "₹800", second: "₹400" },
        minimumParticipation: "12 teams",
        rules: {
          general: [
            "Follow all instructions given by the event organizers.",
            "Respect the game setup; do not tamper with or damage props, clues, or puzzles.",
            "The use of mobile devices or any external assistance is strictly prohibited.",
            "Do not force open locked items or dismantle equipment unless directed by clues."
          ],
          team: [
            "Teams must be registered and have paid the ₹100 entry fee.",
            "Each team will be assigned a number for identification.",
            "All team members must remain inside the escape room until the game ends."
          ],
          game: [
            "The game has a 45-minute time limit.",
            "Teams must solve puzzles in the correct sequence to progress.",
            "Volunteers may provide limited guidance but will not reveal solutions.",
            "Any attempt to cheat or break the rules will result in disqualification."
          ],
          winningCriteria: [
            "Teams that escape by solving all puzzles within the time limit will have their time recorded.",
            "If no team completes the challenge, ranking will be based on progress made.",
            "In case of a tie, the team that solved the most puzzles will rank higher."
          ],
          safetyAndConduct: [
            "Participants must act responsibly and avoid disruptive behavior.",
            "Any misconduct, including damaging property or arguing with volunteers, will lead to disqualification.",
            "Follow all safety instructions provided by the organizers."
          ]
        }
      },
      {
        name: "Prompt Engineering",
        time: "15 minutes",
        venue: "Lab 1",
        participants: "Single",
        entryFee: "₹30",
        prizes: "Certificate/Medals",
        description:
          "A game that tests the ability to generate precise, effective responses to given prompts.",
        mode: "Offline",
        type: "Individual",
        prizeMoney: { first: "₹400", second: "₹200" },
        minimumParticipation: "20 participants",
        rules: {
          general: [
            "Follow all instructions given by the event organizers.",
            "Responses must be original and adhere to the assigned prompt.",
            "The use of mobile devices or external help is strictly prohibited.",
            "Any attempt to copy or manipulate the evaluation process will lead to disqualification."
          ],
          registrationAndOrientation: [
            "Participants must verify their registration and pay the ₹30 entry fee.",
            "A briefing will be given on the rules, evaluation criteria, and time limit."
          ],
          game: [
            "Each participant will receive a unique or randomly selected prompt.",
            "Participants will have 15 minutes to generate a response.",
            "Responses must be submitted in the given format within the allotted time.",
            "Judges will score responses based on creativity, relevance, and prompt adherence."
          ],
          winningCriteria: [
            "The highest-scoring responses will be ranked based on:",
            "Creativity (originality and uniqueness)",
            "Relevance (how well the response matches the prompt)",
            "Prompt Adherence (clarity and precision in addressing the prompt)",
            "In case of a tie, a tiebreaker round with a new prompt may be conducted."
          ],
          safetyAndConduct: [
            "Participants must act responsibly and avoid any disruptive behavior.",
            "Any misconduct, including arguing with judges or fellow participants, will result in disqualification."
          ]
        }
      },
      {
        name: "HTML Glow-Up",
        time: "15 minutes",
        venue: "Lab 2",
        participants: "Single",
        entryFee: "₹40",
        prizes: "Certificates",
        description:
          "Participants are provided with an HTML page and must creatively apply CSS to enhance its visual appeal. Bootstrap frameworks are not allowed.",
        mode: "Offline",
        type: "Individual",
        prizeMoney: { first: "₹400", second: "₹200" },
        minimumParticipation: "20 participants",
        rules: {
          general: [
            "Follow all instructions given by the event organizers.",
            "No use of external frameworks or libraries (including Bootstrap).",
            "Only CSS (inline, internal, or external) should be used to style the provided HTML page.",
            "Participants must complete their designs within the 15-minute time limit."
          ],
          registrationAndOrientation: [
            "Participants must verify their registration and pay the ₹40 entry fee.",
            "A briefing will be given on the rules, evaluation criteria, and time limit."
          ],
          game: [
            "Each participant will receive a basic HTML template.",
            "Participants will have 15 minutes to enhance the visual appeal using CSS.",
            "Use only the provided tools (VS Code, Notepad++, etc.).",
            "Internet access is restricted to prevent external resources.",
            "Designs must be submitted immediately after the timer ends."
          ],
          winningCriteria: [
            "Creativity (innovative and appealing use of CSS)",
            "Design Aesthetics (layout, colors, and overall visual harmony)",
            "Technical Skill (proper use of CSS properties and techniques)",
            "In case of a tie, a quick styling task may be assigned as a tiebreaker."
          ],
          safetyAndConduct: [
            "Participants must act responsibly and avoid any disruptive behavior.",
            "Any misconduct, including arguing with judges or fellow participants, will result in disqualification."
          ]
        }
      },
      {
        name: "Blind Coding",
        time: "20-25 minutes",
        venue: "Lab 3",
        participants: "Single",
        entryFee: "₹20",
        prizes: "Certificate and Medal",
        description:
          "Participants write code with the monitor turned off. Afterward, a volunteer checks the code's accuracy. Judging focuses on functionality, logic, and syntax.",
        mode: "Offline",
        type: "Individual",
        prizeMoney: { first: "₹200", second: "₹100" },
        minimumParticipation: "15 participants",
        rules: {
          general: [
            "Follow all instructions given by the event organizers.",
            "Participants must write code without seeing the screen.",
            "No external aids such as notes, mobile devices, or IDE auto-suggestions are allowed.",
            "Code will be evaluated based on functionality, logic, and syntax correctness."
          ],
          registrationAndOrientation: [
            "Participants must verify their registration and pay the ₹20 entry fee.",
            "A briefing will be given on the rules, evaluation criteria, and time limit."
          ],
          game: [
            "Each participant will receive a coding challenge or task.",
            "Participants must rely on memory, logic, and keyboard skills to write the code.",
            "The monitor will remain turned off or covered during the coding phase.",
            "Participants will have 20-25 minutes to complete the challenge.",
            "Volunteers will ensure participants follow the rules and assist with technical issues.",
            "Code must be submitted immediately after the timer ends."
          ],
          winningCriteria: [
            "Functionality (whether the code produces the correct output)",
            "Logic (the overall approach and problem-solving strategy)",
            "Syntax Correctness (proper use of language syntax)",
            "In case of a tie, an additional quick blind coding task may be assigned."
          ],
          safetyAndConduct: [
            "Participants must act responsibly and avoid any disruptive behavior.",
            "Any misconduct, including arguing with judges or fellow participants, will result in disqualification."
          ]
        }
      },
      {
        name: "Bug Relay",
        time: "20 minutes",
        venue: "Lab",
        participants: "Teams of 3",
        entryFee: "₹30 per team",
        prizes: "Certificates",
        description:
          "Teams debug code in a relay format, passing progress to the next member.",
        mode: "Offline",
        type: "Team (3 members)",
        prizeMoney: { first: "₹200", second: "₹100" },
        minimumParticipation: "10 teams",
        rules: {
          general: [
            "Follow all instructions given by the event organizers.",
            "Each team member will debug code for a limited time (e.g., 5-7 minutes).",
            "After their turn, they must explain their progress to the next team member.",
            "Teams must debug as many code snippets as possible within 20 minutes.",
            "The use of external aids (mobile devices, online compilers, AI tools) is strictly prohibited.",
            "Any attempt to manipulate or cheat the evaluation process will lead to disqualification."
          ],
          registrationAndOrientation: [
            "Teams must verify their registration and pay the ₹30 entry fee.",
            "A briefing will be given on the rules, evaluation criteria, and time limits."
          ],
          game: [
            "Each team will receive a buggy code snippet containing logical, syntax, or runtime errors.",
            "The first team member starts debugging for 5-7 minutes before passing the task to the next member.",
            "The second member continues debugging, followed by the third.",
            "If a bug is successfully fixed, the team notifies a volunteer, who verifies the solution.",
            "Upon successful verification, a new buggy snippet is provided.",
            "The process repeats for 20 minutes, with teams aiming to fix as many bugs as possible."
          ],
          winningCriteria: [
            "Number of Bugs Fixed (total snippets successfully debugged)",
            "Accuracy (quality of debugging and correctness of the solutions)",
            "Collaboration (how effectively the team worked together in relays)",
            "In case of a tie, a tie-breaker snippet with a strict 5-minute time limit may be assigned."
          ],
          safetyAndConduct: [
            "Participants must act responsibly and avoid any disruptive behaviour.",
            "Any misconduct, including arguing with judges or fellow participants, will result in disqualification."
          ]
        }
      },
      {
        name: "Code Sharks",
        time: "5-10 minutes per pitch",
        venue: "Classroom",
        participants: "Teams of 2-5",
        entryFee: "₹50 per participant",
        prizes: "Certificates",
        description:
          "Teams pitch an original and innovative tech idea to judges.",
        mode: "Offline",
        type: "Team (2-5 members)",
        prizeMoney: { first: "₹700", second: "₹300" },
        minimumParticipation: "10 teams",
        rules: {
          general: [
            "Follow all instructions given by the event organizers.",
            "Each team must consist of 2-5 participants.",
            "Teams must present an original and innovative idea; plagiarism will result in disqualification.",
            "Judges' decisions are final and binding."
          ],
          registrationAndOrientation: [
            "Teams must verify their registration and pay the ₹50 entry fee per participant.",
            "A briefing will be given on the rules, evaluation criteria, and presentation format.",
            "Teams will be assigned an order for their pitch presentation."
          ],
          game: [
            "Each team will have 5-10 minutes to present their idea.",
            "Teams must cover the problem, solution, tech stack, feasibility, and market potential in their pitch.",
            "Judges may ask questions, engage in mock negotiations, or challenge the idea’s viability.",
            "Teams may use slides, prototypes, or visual aids but must bring their own devices.",
            "Volunteers will ensure smooth transitions and enforce time limits."
          ],
          winningCriteria: [
            "Creativity (Originality and innovation of the idea)",
            "Feasibility (Practicality and ease of implementation)",
            "Market Potential (Demand and usefulness in the real world)",
            "Presentation (Clarity, confidence, and engagement)",
            "In case of a tie, judges may ask a quick tie-breaker question or request a brief problem-solving response."
          ],
          safetyAndConduct: [
            "Participants must act professionally and respect fellow participants and judges.",
            "Any misconduct, including arguing with judges or disrupting the event, will result in disqualification."
          ]
        }
      },
      {
        name: "Hardwire Rapidfire",
        time: "30 minutes",
        venue: "E-Sports Arena",
        participants: "Single",
        entryFee: "₹30",
        prizes: "Medals/Certificates",
        description:
          "Contestants assemble a disconnected PC, turn it on, and execute a provided program. The fastest five from the first round proceed to a more challenging second round.",
        mode: "Offline",
        type: "Individual",
        prizeMoney: { first: "₹400", second: "₹200" },
        minimumParticipation: "20 participants",
        rules: {
          general: [
            "Follow all instructions given by the event organizers.",
            "Participants must assemble and power on a disconnected PC within the given time.",
            "In Round 2, participants must troubleshoot hardware issues or replace components.",
            "Judges' decisions are final and binding."
          ],
          registrationAndOrientation: [
            "Participants must verify their registration and pay the ₹30 entry fee.",
            "A briefing will be given on the competition format, rules, and evaluation criteria.",
            "Participants will be assigned a workstation for the challenge."
          ],
          game: [
            "Round 1: Participants must assemble the disconnected PC, power it on, and execute a provided program. The top five fastest and most accurate participants qualify for Round 2.",
            "Round 2: Participants must complete a more complex hardware task, such as replacing or reseating a hardware component or identifying and fixing a basic hardware issue (e.g., reconnecting a cable). The fastest and most accurate participant wins."
          ],
          winningCriteria: [
            "Speed (Time taken to complete the task)",
            "Accuracy (Correct assembly and execution)",
            "Problem-Solving Skills (For troubleshooting tasks in Round 2)",
            "In case of a tie, an additional quick hardware task may be assigned."
          ],
          safetyAndConduct: [
            "Participants must handle all hardware components responsibly to avoid damage.",
            "Any form of external assistance, tampering, or misconduct will result in disqualification."
          ]
        }
      }
    ]
  },
  {
    title: "Non-Technical Events",
    description:
      "Engage in exciting non-technical challenges that test your creativity, wit, and problem-solving abilities.",
    backgroundImage: "https://picsum.photos/240/320?random=2",
    details: [
      {
        name: "Squid Game",
        description: "A thrilling game based on the popular series.",
        entryFee: "₹500",
        mode: "Offline",
        type: "Group",
        participants: "Teams of 5",
        venue: "Main Ground",
        time: "Today at 3 PM",
        prizes: "Trophies and Certificates",
        prizeMoney: { first: "₹2000", second: "₹1000" },
        minimumParticipation: "5 teams",
        rules: {
          game: [
            "Rule 1",
            "Rule 2",
            // other rules...
          ]
        }
      },
      {
        name: "Human Ludo",
        time: "15 minutes",
        venue: "Main Ground",
        participants: "Teams of 4",
        entryFee: "₹50 per participant",
        prizes: "Certificates for winners",
        description:
          "A life-sized version of Ludo where participants act as tokens.",
        mode: "Offline",
        type: "Group (of 4)",
        prizeMoney: { first: "Certificates" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Players act as tokens and must move according to dice rolls.",
            "The game follows standard Ludo rules (a player must roll a 6 to enter the board).",
            "Special challenge spots include trivia or mini-games, which must be completed to proceed.",
            "If a team lands on the same spot as another, they can send the opponent back to the start.",
            "The first team to get all their members to the finish wins."
          ],
          general: [
            "Follow all instructions given by the event organizers.",
            "Any form of misconduct will lead to disqualification."
          ]
        }
      },
      {
        name: "Treasure Hunt",
        time: "45 minutes",
        venue: "College Ground",
        participants: "Solo",
        entryFee: "₹50",
        prizes: "Trophy/Certificates",
        description:
          "A hunt-based event where participants solve clues and find hidden items across the campus.",
        mode: "Offline",
        type: "Individual",
        prizeMoney: { first: "Trophy/Certificates" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Players will be given the first clue at the starting point.",
            "Each clue will lead to the next hidden clue.",
            "Clues must be solved within the time limit.",
            "The participant who finds the treasure first wins.",
            "No external help (internet, friends, etc.) is allowed.",
            "Any form of misconduct will lead to disqualification."
          ]
        }
      },
      {
        name: "Beyond the Brush",
        time: "30 minutes",
        venue: "Main Ground",
        participants: "Single",
        entryFee: "₹30 per participant",
        prizes: "Certificates for the most creative paintings",
        description:
          "Participants use unconventional tools like feathers, earbuds, vegetables, or threads to create unique artwork. Paint Brushes are not allowed.",
        mode: "Offline",
        type: "Individual",
        prizeMoney: { first: "Certificates" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Only unconventional tools like feathers, earbuds, vegetables, or threads can be used.",
            "Paintbrushes are strictly not allowed.",
            "Participants must bring their own materials unless provided.",
            "Judges will evaluate based on creativity, technique, and visual appeal.",
            "No pre-made sketches or tracing is allowed."
          ]
        }
      },
      {
        name: "Snap Tales",
        time: "10 minutes for snapshots; 20 minutes for story creation",
        venue: "Campus",
        participants: "Single",
        entryFee: "₹20",
        prizes: "Certificates for top 3 stories",
        description:
          "Participants take five original snapshots around the campus and create a story.",
        mode: "Offline",
        type: "Individual",
        prizeMoney: { first: "Certificates" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Participants must take five original snapshots around the campus.",
            "The snapshots should be connected through a creative story.",
            "The story can be humorous, dramatic, or emotional.",
            "Alternatively, participants can create a 30-second reel instead of a story.",
            "The final submission will be judged on creativity, storytelling, and relevance.",
            "No pre-existing images or AI-generated content allowed."
          ]
        }
      },
      {
        name: "Meme Mastermind",
        time: "15-20 minutes",
        venue: "Main Ground",
        participants: "Single",
        entryFee: "₹10 per participant",
        prizes: "Certificates for top 3 memes",
        description:
          "Participants create memes based on provided themes. Memes can be made using digital tools or hand-drawn.",
        mode: "Offline",
        type: "Individual",
        prizeMoney: { first: "Certificates" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Participants will be given a theme (e.g., 'College Life' or 'Tech Struggles').",
            "Memes can be created digitally or hand-drawn.",
            "No offensive, inappropriate, or plagiarized content is allowed.",
            "Memes will be judged based on humor, creativity, and relevance to the theme.",
            "Participants must submit their meme within the time limit."
          ]
        }
      },
      {
        name: "Trash to Treasure",
        time: "45 minutes",
        venue: "Not specified",
        participants: "Single",
        entryFee: "₹50",
        prizes: "Certificates for the most innovative creations",
        description:
          "Participants transform provided e-waste into creative or functional items.",
        mode: "Offline",
        type: "Individual",
        prizeMoney: { first: "Certificates" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Participants will receive old electronic items like cables, keyboards, and circuits.",
            "The goal is to transform them into creative or functional items.",
            "Judging will be based on innovation, usefulness, and aesthetics.",
            "Participants can bring additional materials, but the main component must be from the provided e-waste.",
            "No pre-made designs or external assistance allowed.",
            "Final creations must be presented within the given time frame."
          ]
        }
      }
    ]
  },
  {
    title: "Cultural Events",
    description:
      "Showcase your artistic talents and cultural prowess in our diverse range of cultural events.",
    backgroundImage: "https://picsum.photos/240/320?random=3",
    details: [
      {
        name: "Pixel's Got Latent",
        time: "3-5 minutes per performance",
        venue: "Auditorium",
        participants: "Single or Teams (3-6 for groups)",
        entryFee: "₹50 per participant",
        prizes: "Trophy and Certificates for top performers",
        description: "A high-energy competition featuring various performing arts.",
        mode: "Online/Offline",
        type: "Solo or Group (3-6)",
        prizeMoney: { first: "₹500 per category" },
        minimumParticipation: "20 participants",
        rules: {
          general: [
            "No participant may point out any specific individual or religion in any manner.",
            "Participants will be judged based on content, fluency, spontaneity, presentation, and sense of humour.",
            "Exceeding the time limit (3-5 minutes) will result in negative marking.",
            "Performances must be free from foul language, abusive words, or inappropriate gestures.",
            "The use of offensive jokes, hate speech, or disrespect towards any community will result in immediate disqualification.",
            "Participants must reach the venue at least 1 hour before the event begins.",
            "All participants must adhere strictly to these rules. The organizing committee reserves the right to take necessary action if required."
          ],
          game: [
            "Participants will perform solo or in groups in their chosen category (e.g., Singing, Rap, Beatboxing, or Shayari).",
            "Time limit: 3-5 minutes per participant or group.",
            "A maximum of 3 entries per contingent is allowed."
          ]
        }
      },
      {
        name: "Laughter Mania",
        time: "5 minutes per act",
        venue: "Auditorium",
        participants: "Single",
        entryFee: "₹30",
        prizes: "Certificates for top 3 performers",
        description:
          "Participants deliver humorous acts based on observations, college life, or general experiences.",
        mode: "Online/Offline",
        type: "Solo",
        prizeMoney: { first: "₹500" },
        minimumParticipation: "5 participants",
        rules: {
          general: [
            "No participant may point out any specific individual or religion in any manner.",
            "Participants will be judged based on content, fluency, spontaneity, presentation, and sense of humour.",
            "Exceeding the time limit (5 minutes) will result in negative marking.",
            "Performances must be free from foul language, abusive words, or inappropriate gestures.",
            "The use of offensive jokes, hate speech, or disrespect towards any community will result in immediate disqualification.",
            "Participants must reach the venue at least 1 hour before the event begins.",
            "All participants must adhere strictly to these rules. The organizing committee reserves the right to take necessary action if required."
          ],
          game: [
            "Participants must perform their own original stand-up comedy material.",
            "Time Limit: 5 minutes per participant.",
            "A maximum of 3 entries per contingent (college) is allowed."
          ]
        }
      },
      {
        name: "Dil Dhadakne Do",
        time: "30-45 minutes",
        venue: "College Ground",
        participants: "Single",
        entryFee: "₹50",
        prizes: "Certificates for top 3 photos",
        description:
          "Participants click photographs on campus and explain the story behind their best picture.",
        mode: "Offline",
        type: "Solo",
        prizeMoney: { first: "Certificates" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Participants must click original photographs on campus.",
            "Participants must submit their best photo and explain the story behind it.",
            "Judging based on creativity, composition, and storytelling."
          ]
        }
      },
      {
        name: "Fashion Show",
        time: "30-45 minutes",
        venue: "Main Ground",
        participants: "Teams of 3-4",
        entryFee: "₹50 per participant",
        prizes: "Certificates for winners",
        description:
          "Inspired by game shows, participants complete challenges like singing lyrics or trivia to avoid elimination.",
        mode: "Offline",
        type: "Group",
        prizeMoney: { first: "₹2500" },
        minimumParticipation: "5 participants",
        rules: {
          general: [
            "The competition is open to all dance styles.",
            "Inappropriate printed shirts/t-shirts, vulgarity in songs, or inappropriate gestures will not be tolerated.",
            "Use of props is allowed, but a list of props must be submitted beforehand.",
            "No restrictions on the number of songs used, but all music must be free of abusive words (beeped/muted).",
            "The judge's decision will be final and binding.",
            "Participants must submit their audio files in MP3 format at least one day prior.",
            "Participants must reach the venue at least 1 hour before the event starts.",
            "Obscene language or gestures will result in disqualification."
          ],
          groupDance: [
            "Team size: 2-10 members (Duo entries count as a group).",
            "Final round: Participants must perform their own choreography (optional theme provided).",
            "Time limit for the Final round: 5-6 minutes.",
            "2 teams per contingent is allowed."
          ]
        }
      },
      {
        name: "War of DJs",
        time: "10 minutes per performance",
        venue: "Auditorium",
        participants: "Single",
        entryFee: "₹50",
        prizes: "Trophy and Certificates for top DJs",
        description:
          "DJs showcase mixing skills and engage the audience with creative transitions and live mixes.",
        mode: "Online/Offline",
        type: "Solo",
        prizeMoney: { first: "₹500" },
        minimumParticipation: "5 participants",
        rules: {
          general: [
            "Solo performance only – No teams or duos.",
            "Time limit: 5 minutes – Exceeding it will lead to negative marking.",
            "Console provided – Model details will be shared later.",
            "Bring your own music – Only USB pen drives are allowed. No CDs or external drives.",
            "Strictly no explicit content – Inappropriate words, gestures, or songs lead to disqualification.",
            "Live performance only – No pre-recorded mixes allowed.",
            "Judging criteria: Creativity, mixing skills, track selection, crowd engagement, and technical ability.",
            "Judges' decision is final – No disputes will be entertained.",
            "Handle equipment with care – Any damage is the participant’s responsibility.",
            "Arrive 1 hour before the event – Latecomers may be disqualified."
          ],
          game: [
            "Time limit: 5 minutes per participant.",
            "A maximum of 1 entry per contingent is allowed."
          ]
        }
      }
    ]
  },
  {
    title: "Sports Events",
    description:
      "Compete in various sports events and showcase your athletic abilities.",
    backgroundImage: "https://picsum.photos/240/320?random=4",
    details: [
      {
        name: "Futsal (5v5)",
        time: "14 minutes total",
        venue: "Sports Complex",
        participants: "Teams of 5 players",
        entryFee: "₹700 per team",
        prizes: "Trophies and Special awards",
        description:
          "A fast-paced, small-sided football game with knockout matches.",
        mode: "Offline",
        type: "Group",
        prizeMoney: { first: "₹3500", second: "₹1500" },
        minimumParticipation: "10 teams",
        rules: {
          game: [
            "Game Format: 3v1 rolling sub.",
            "Match Duration: 10 min game (5 min half with 1 break at half time).",
            "Flat/Turf shoes must be worn. Studs not allowed.",
            "No goalkeeper.",
            "Handball inside D will be awarded penalty.",
            "Penalty will be Goal to Goal.",
            "Rolling substitution allowed, only when the ball is out of play.",
            "Goals can be scored from any half.",
            "Goals scored directly from kick-ins/corner/goal kick do not count.",
            "Carpet passes from sidelines when ball out of field (No chip).",
            "Fouls include handball, pushing, tackling from behind, etc.",
            "Yellow card: 1-minute suspension for the player.",
            "Red card: Player sent off, and the team plays with 2 players.",
            "Teams must report 10 minutes before their match.",
            "Misconduct by players or teams (fighting, abusive language, etc.) will lead to disqualification.",
            "Referee’s decision is final."
          ]
        }
      },
      {
        name: "Box Cricket (6v6)",
        time: "20 minutes per match",
        venue: "Sports Complex",
        participants: "Teams of 6 players",
        entryFee: "₹700 per team",
        prizes:
          "Trophies, Certificates, Medals for Best Batsman and Best Bowler",
        description:
          "A condensed cricket version played in a small court with knockout matches.",
        mode: "Offline",
        type: "Group",
        prizeMoney: { first: "₹5000", second: "₹2500" },
        minimumParticipation: "12 teams",
        rules: {
          game: [
            "The umpire's decision will be final.",
            "Each match will consist of 3 overs, and each bowler can bowl only 1 over.",
            "Each team will have 8 players and 1 reserve.",
            "Teams must be present at the ground half an hour before the scheduled time. Failure to do so will result in disqualification.",
            "Bowlers must bowl from within the bowling crease.",
            "The chasing team must score runs (compulsory chase).",
            "Sidearm deliveries will be declared as no-balls.",
            "The bowler must bowl from behind the designated line; otherwise, it will be declared a no-ball.",
            "No LBW (Leg Before Wicket).",
            "Runs will be awarded for byes, leg byes, and overthrows.",
            "The batsman must keep at least one foot inside the batting crease.",
            "The organizing committee reserves the right to make changes to the tournament or rules."
          ]
        }
      },
      {
        name: "Chess",
        time: "15 points per set, best of 3 sets",
        venue: "Sports Complex",
        participants: "Teams of 5 players",
        entryFee: "₹700 per team",
        prizes: "Trophies, Certificates, Special recognition for Best Player",
        description:
          "Volleyball matches with elimination-based tournament format.", // Note: Description seems incorrect; should be chess-related
        mode: "Offline",
        type: "Solo",
        prizeMoney: { first: "₹1000", second: "₹500" },
        minimumParticipation: "7 participants",
        rules: {
          game: [
            "Follows FIDE rules."
          ]
        }
      },
      {
        name: "Badminton",
        time: "20-minute halves (40 minutes total)",
        venue: "Sports Complex",
        participants: "Teams of 11 players",
        entryFee: "₹900 per team",
        prizes:
          "Trophies, Certificates, Awards for Best Goalkeeper and Top Scorer",
        description:
          "Full-field football matches with knockout-based tournament.", // Note: Description seems incorrect; should be badminton-related
        mode: "Offline",
        type: "Solo",
        prizeMoney: { first: "₹1000", second: "₹500" },
        minimumParticipation: "10 participants",
        rules: {
          game: [
            "The league stage will have 1 set format for each category.",
            "If a team wins the first two out of three sets, no further matches will be played, with each set played to 15 points.",
            "Service and side selection will be decided by a toss.",
            "Semi-finals and finals will follow a best-of-three sets format, with each set played to 11 points.",
            "All standard badminton rules apply.",
            "Players will be allowed a 1-minute break between ongoing matches.",
            "A 2-minute interval is allowed between each game, no additional timeouts will be granted."
          ]
        }
      },
      {
        name: "Carrom",
        time: "5-over matches (approximately 45 minutes)",
        venue: "Sports Complex",
        participants: "Teams of 11 players",
        entryFee: "₹900 per team",
        prizes:
          "Trophies, Certificates, Awards for Best Batsman and Best Bowler",
        description:
          "Condensed cricket format with aggressive play and knockout matches.", // Note: Description seems incorrect; should be carrom-related
        mode: "Offline",
        type: "Solo",
        prizeMoney: { first: "₹500" },
        minimumParticipation: "5 participants",
        rules: {
          game: [
            "Single hand use only (using the other hand will be a foul).",
            "You can use thumb.",
            "Use of the hand above the elbow is not allowed.",
            "Any part of your body, except your hand, cannot cross the imaginary diagonal line.",
            "A player can only pocket the queen after pocketing at least one of their own coins."
          ]
        }
      }
    ]
  },
  {
    title: "E-Sports Events",
    description:
      "Battle it out in the digital arena with our exciting E-Sports tournaments.",
    backgroundImage: "https://picsum.photos/240/320?random=5",
    details: [
      {
        name: "Valorant",
        time: "30 minutes per match",
        venue: "E-Sports Arena",
        participants: "Teams of 5 players",
        entryFee: "₹500 per team",
        prizes: "Trophies and Certificates",
        description:
          "Tactical shooter with swift-play mode and knockout format.",
        mode: "Offline",
        type: "Group",
        prizeMoney: { first: "₹5000" },
        minimumParticipation: "10 teams",
        rules: {
          game: [
            "Mode: Standard (6 Rounds).",
            "Allow Cheats: OFF.",
            "Overtime: Win by Two.",
            "The competition will follow a knockout format, with the finals played in a best-of-three format.",
            "For the knockout stage, the map will be Ascent.",
            "For the finals, the three maps will be Bind, Split, and Haven, in the order specified.",
            "Players must have a Riot Valorant account eligible for competitive games and should not have any concurrent ban.",
            "The same account must be used for all matches during the tournament.",
            "Team names and usernames must not contain vulgarities, obscenities, or derivatives of Valorant agents or other similar character names.",
            "Match procedures state that if a player disconnects before the match starts, the organizers must be informed.",
            "You can bring your own peripherals."
          ]
        }
      },
      {
        name: "COD/BGMI",
        time: "30-40 minutes per match",
        venue: "E-Sports Arena",
        participants: "Teams of 4 players",
        entryFee: "₹500 per team",
        prizes: "Trophies and Certificates for top teams",
        description:
          "Competitive shooting games with Battle Royale or objective-based matches.",
        mode: "Offline",
        type: "Group",
        prizeMoney: { first: "₹3000", second: "₹2000" },
        minimumParticipation: "10 teams",
        rules: {
          bgmi: [
            "Two classic matches will be played on two different maps in the following order: Erangel, Miramar, and Sanhok or Vikendi.",
            "Final match will consist of 3 matches (Erangel, Sanhok, Miramar).",
            "Players are restricted to using phones only; the use of tablets is not permitted.",
            "If a player is found using mods or aim bots, the team will be disqualified from the event.",
            "All players must download the required maps; if they get kicked out at the start of the event, it’s their responsibility.",
            "Ensure their device is fully charged.",
            "Point system: 1 point per kill."
          ],
          cod: [
            "5v5 format.",
            "Standard S&D rules.",
            "No hacks.",
            "Map rotation: Summit, Raid, Firing Range, etc.",
            "BO3 or BO5 format (depending on time).",
            "Players must submit their game IDs before the match."
          ]
        }
      },
      {
        name: "FIFA (2v2)",
        time: "10-15 minutes per match",
        venue: "E-Sports Arena",
        participants: "Teams of 2 players",
        entryFee: "₹200 per team",
        prizes: "Certificates for top teams",
        description: "Football simulation with knockout-based tournament.",
        mode: "Offline",
        type: "Group",
        prizeMoney: { first: "Certificates" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Game Length: 6 minutes per half.",
            "Difficulty Level: Legendary, Ultimate.",
            "Game Speed: Normal.",
            "Disconnects/Lag: Rules for handling these situations (e.g., rematches, forfeits).",
            "No Goal Kicks/Corners Glitch Exploitation: If there are any known exploits, disallow them.",
            "Sportsmanship: Expected.",
            "Cheating: Absolutely prohibited."
          ]
        }
      },
      {
        name: "Mortal Kombat (1v1)",
        time: "5-10 minutes per match",
        venue: "E-Sports Arena",
        participants: "Single",
        entryFee: "₹100 per participant",
        prizes: "Certificates for top 3 players",
        description: "Fighting game with 1v1 matches and knockout format.",
        mode: "Offline",
        type: "Solo",
        prizeMoney: { first: "Certificates" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Tournament Format: Single or Double Elimination (depending on participant count).",
            "Best-of-3 games per match.",
            "Character Selection: Winning player of previous match chooses character first, losing player chooses last.",
            "In-Game Settings: 90-second timer, Tournament Mode Default Options, Arena Select: Off, Interactable: On.",
            "Leaving Games Early: Strongly discouraged. Penalties for repeated quitting.",
            "Disconnects: Round forfeited. Match continues unless mutually agreed to restart.",
            "Sportsmanship: Expected."
          ]
        }
      },
      {
        name: "Among Us",
        time: "10-15 minutes per round",
        venue: "E-Sports Arena",
        participants: "Single or Teams of 4-10 players",
        entryFee: "₹100 per participant",
        prizes: "Certificates for top players or teams",
        description:
          "Social deduction game with task completion and impostor identification.",
        mode: "Offline",
        type: "Solo or Group",
        prizeMoney: { first: "Certificates" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Standard Among Us rules apply.",
            "Participants complete tasks while identifying impostors."
          ]
        }
      },
      {
        name: "Stumble Guys",
        time: "10-15 minutes per match",
        venue: "E-Sports Arena",
        participants: "Single",
        entryFee: "₹100 per participant",
        prizes: "Certificates for top players",
        description:
          "Multiplayer obstacle course game with quick reflexes and timing.",
        mode: "Offline",
        type: "Solo",
        prizeMoney: { first: "Certificates" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Standard Stumble Guys rules apply.",
            "Judged on speed and completion."
          ]
        }
      }
    ]
  },
  {
    title: "Fun Events",
    description:
      "Engage in fun and exciting events that test your skills and have a good time.",
    backgroundImage: "https://picsum.photos/240/320?random=6",
    details: [
      {
        name: "Minute to Win It",
        time: "15-20 minutes",
        venue: "Main Ground",
        participants: "Single",
        entryFee: "₹10 per participant",
        prizes: "Certificates for top 3 scorers",
        description:
          "Quick challenges completed in under a minute, testing speed and accuracy.",
        mode: "Offline",
        type: "Solo",
        prizeMoney: { first: "Certificates" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Participants complete quick challenges within a minute.",
            "Judged on speed and accuracy."
          ]
        }
      },
      {
        name: "Mystery Box",
        time: "5 minutes per team",
        venue: "Main Ground",
        participants: "Teams of 3-4",
        entryFee: "₹50 per participant",
        prizes: "Certificates for winners",
        description:
          "Teams open a box with items hinting at a Bollywood song and must perform it.",
        mode: "Offline",
        type: "Group",
        prizeMoney: { first: "Certificates" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Teams open a box with items hinting at a Bollywood song.",
            "Teams must perform the song within 5 minutes."
          ]
        }
      }
    ]
  }
];