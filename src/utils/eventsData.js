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
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSfdi1Ggt2zqrPpoWUafhoerULBwauuvfctDeq7DO0k2YZEEpg/viewform?usp=header",
        time: "45 minutes",
        date: "8th March",
        venue: "Computer Centre",
        participants: "Teams of 3",
        entryFee: "₹90 per team",
        prizes: "Trophy and Certificates",
        description:
          'A tech-themed treasure hunt inside a lab where participants solve puzzles and challenges to "escape."',
        mode: "Offline",
        type: "Group (3)",
        prizeMoney: { first: "exciting prize to be announced"},
        minimumParticipation: "12 teams",
        rules: {
          general: [
            "Follow all instructions given by the event organizers.",
            "Respect the game setup; do not tamper with or damage props, clues, or puzzles.",
            "The use of mobile devices or any external assistance is strictly prohibited.",
            "Do not force open locked items or dismantle equipment unless directed by clues.",
          ],
          team: [
            "Teams must be registered and have paid the ₹100 entry fee.",
            "Each team will be assigned a number for identification.",
            "All team members must remain inside the escape room until the game ends.",
          ],
          game: [
            "The game has a 45-minute time limit.",
            "Teams must solve puzzles in the correct sequence to progress.",
            "Volunteers may provide limited gdance but will not reveal solutions.",
            "Any attempt to cheat or break the rules will result in disqualification.",
          ],
          winningCriteria: [
            "Teams that escape by solving all puzzles within the time limit will have their time recorded.",
            "If no team completes the challenge, ranking will be based on progress made.",
            "In case of a tie, the team that solved the most puzzles will rank higher.",
          ],
          safety: [
            "Participants must act responsibly and avoid disruptive behavior.",
            "Any misconduct, including damaging property or arguing with volunteers, will lead to disqualification.",
            "Follow all safety instructions provided by the organizers.",
          ],
        },
      },
      {
        name: "Prompt Engineering",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSdZxKRoEHdhjosr9nfP-iP43oG9NKCPt4Ur2V6aQWzjbhIZFA/viewform?usp=header",
        time: "15 minutes",
        date: "7th March",
        venue: "Lab 1",
        participants: "Single",
        entryFee: "₹50",
        prizes: "Certificate/Medals",
        description:
          "A game that tests the ability to generate precise, effective responses to given prompts.",
        mode: "Offline",
        type: "Individual",
        prizeMoney: { first: "₹500", second: "₹250" },
        minimumParticipation: "20 participants",
        rules: {
          general: [
            "Follow all instructions given by the event organizers.",
            "Responses must be original and adhere to the assigned prompt.",
            "The use of mobile devices or external help is strictly prohibited.",
            "Any attempt to copy or manipulate the evaluation process will lead to disqualification.",
          ],
          registration: [
            "Participants must verify their registration and pay the ₹30 entry fee.",
            "A briefing will be given on the rules, evaluation criteria, and time limit.",
          ],
          game: [
            "Each participant will receive a unique or randomly selected prompt.",
            "Participants will have 15 minutes to generate a response.",
            "Responses must be submitted in the given format within the allotted time.",
            "Judges will score responses based on creativity, relevance, and prompt adherence.",
          ],
          winningCriteria: [
            "The highest-scoring responses will be ranked based on:",
            "Creativity (originality and uniqueness)",
            "Relevance (how well the response matches the prompt)",
            "Prompt Adherence (clarity and precision in addressing the prompt)",
            "In case of a tie, a tiebreaker round with a new prompt may be conducted.",
          ],
          safety: [
            "Participants must act responsibly and avoid any disruptive behavior.",
            "Any misconduct, including arguing with judges or fellow participants, will result in disqualification.",
          ],
        },
      },
      {
        name: "HTML Glow-Up",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLScBdzK3ZInrck4GoDegaM-F5AWVGfFMgafkoiIPgzo4RKbLcw/viewform?usp=header",
        time: "15 minutes",
        date: "7th March",
        venue: "Lab 2",
        participants: "Single",
        entryFee: "₹50",
        prizes: "Certificates",
        description:
          "Participants are provided with an HTML page and must creatively apply CSS to enhance its visual appeal. Bootstrap frameworks are not allowed.",
        mode: "Offline",
        type: "Individual",
        prizeMoney: { first: "exciting prize to be announced", },
        minimumParticipation: "20 participants",
        rules: {
          general: [
            "Follow all instructions given by the event organizers.",
            "No use of external frameworks or libraries (including Bootstrap).",
            "Only CSS (inline, internal, or external) should be used to style the provided HTML page.",
            "Participants must complete their designs within the 15-minute time limit.",
          ],
          registration: [
            "Participants must verify their registration and pay the ₹40 entry fee.",
            "A briefing will be given on the rules, evaluation criteria, and time limit.",
          ],
          game: [
            "Each participant will receive a basic HTML template.",
            "Participants will have 15 minutes to enhance the visual appeal using CSS.",
            "Use only the provided tools (VS Code, Notepad++, etc.).",
            "Internet access is restricted to prevent external resources.",
            "Designs must be submitted immediately after the timer ends.",
          ],
          winningCriteria: [
            "Creativity (innovative and appealing use of CSS)",
            "Design Aesthetics (layout, colors, and overall visual harmony)",
            "Technical Skill (proper use of CSS properties and techniques)",
            "In case of a tie, a quick styling task may be assigned as a tiebreaker.",
          ],
          safety: [
            "Participants must act responsibly and avoid any disruptive behavior.",
            "Any misconduct, including arguing with judges or fellow participants, will result in disqualification.",
          ],
        },
      },
      {
        name: "Bug Relay",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSckAvqENnDHlylJ3JGTJFAzq-a_pp54DEC8jUzOThDXVzNFvg/viewform?usp=header",
        time: "20 minutes",
        date: "7th March",
        venue: "Lab 1",
        participants: "Teams of 2-3",
        entryFee: "₹90 per team",
        prizes: "Certificates",
        description:
          "Teams debug code in a relay format, passing progress to the next member.",
        mode: "Offline",
        type: "Team (2-3 members)",
        prizeMoney: { first: "exciting prize to be announced" },
        minimumParticipation: "10 teams",
        rules: {
          general: [
            "Follow all instructions given by the event organizers.",
            "Each team member will debug code for a limited time (e.g., 5-7 minutes).",
            "After their turn, they must explain their progress to the next team member.",
            "Teams must debug as many code snippets as possible within 20 minutes.",
            "The use of external aids (mobile devices, online compilers, AI tools) is strictly prohibited.",
            "Any attempt to manipulate or cheat the evaluation process will lead to disqualification.",
          ],
          registration: [
            "Teams must verify their registration and pay the ₹30 entry fee.",
            "A briefing will be given on the rules, evaluation criteria, and time limits.",
          ],
          game: [
            "Each team will receive a buggy code snippet containing logical, syntax, or runtime errors.",
            "The first team member starts debugging for 5-7 minutes before passing the task to the next member.",
            "The second member continues debugging, followed by the third.",
            "If a bug is successfully fixed, the team notifies a volunteer, who verifies the solution.",
            "Upon successful verification, a new buggy snippet is provided.",
            "The process repeats for 20 minutes, with teams aiming to fix as many bugs as possible.",
          ],
          winningCriteria: [
            "Number of Bugs Fixed (total snippets successfully debugged)",
            "Accuracy (quality of debugging and correctness of the solutions)",
            "Collaboration (how effectively the team worked together in relays)",
            "In case of a tie, a tie-breaker snippet with a strict 5-minute time limit may be assigned.",
          ],
          safety: [
            "Participants must act responsibly and avoid any disruptive behaviour.",
            "Any misconduct, including arguing with judges or fellow participants, will result in disqualification.",
          ],
        },
      },
      {
        name: "UI/UX Designing",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSefYwIfBm05dEEDlyTk0baRIGGlPvzyseBzMqOko7jaJZUCcw/viewform?usp=header",
        time: "60 minutes",
        date: "7th March",
        venue: "Lab 2",
        participants: "Single",
        entryFee: "₹50 per team",
        prizes: "Certificates",
        description:
          "Participants will be given a design template and redesign the template creatively. Best design will be selected by our judge
          dimesh  the developer",
        mode: "Offline",
        type: "Team (3 members)",
        prizeMoney: { first: "exciting prize to be announced" },
        minimumParticipation: "15 participants",
        rules: {
          general: [
            "Follow all instructions given by the event organizers.",
            "Each team must brainstorm and design a UI/UX prototype within the given time limit (e.g., 60 minutes).",
            "After the design phase, teams must present their design choices and user experience flow to the judges.",
            "Teams must complete their design using the provided tools (e.g., Figma, Adobe XD, Sketch) without external pre-made templates.",
            "The use of external aids (mobile devices, pre-made assets, AI-generated designs) is strictly prohibited unless specified.",
            "Any attempt to manipulate or cheat the evaluation process will lead to disqualification.",
          ],
          registration: [
            "Teams must verify their registration and pay the ₹50 entry fee.",
            "A briefing will be given on the rules, evaluation criteria, and time limits.",
          ],
          game: [
            "Each participant will be given a design challenge with specific requirements and constraints.",
            "The participant must create a UI/UX prototype within the allotted time (e.g., 60 minutes).",
            "The design should follow usability principles, accessibility guidelines, and a given theme (if any).",
            "Once the time is up, the participant must submit their design for evaluation.",
            "Judges will review the designs based on creativity, user experience, and adherence to the given challenge.",
            "No pre-made templates or external assets (unless provided by the organizers) are allowed.",
          ],
          winningCriteria: [
            "Creativity (originality and uniqueness of the design)",
            "Usability (how intuitive and user-friendly the design is)",
            "Visual Appeal (aesthetics, color schemes, typography, and layout)",
            "Accessibility (adherence to accessibility best practices)",
            "In case of a tie, participants may be given an additional mini-challenge to refine or justify their design choices within 5 minutes.",
          ],
          safety: [
            "Participants must act professionally and follow ethical design practices.",
            "Any misconduct, including plagiarism, disrespectful behavior, or failure to follow competition rules, will result in disqualification.",
          ],
        },
      },
    ],
  },
  {
    title: "Non-Technical Events",
    description:
      "Engage in exciting non-technical challenges that test your creativity, wit, and problem-solving abilities.",
    backgroundImage: "https://picsum.photos/240/320?random=2",
    details: [
      {
        name: "Squid Game",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSd9GUdujWUicqsaaagxi9cwi2BYhzElRUYah-H3YHwq_h6Hzw/viewform?usp=header",
        description: "A thrilling game based on the popular series.",
        date: "8th March",
        entryFee: "₹100",
        mode: "Offline",
        type: "Single",
        participants: "1",
        venue: "Canteen Area",
        time: "-",
        prizes: "Trophies and Certificates",
        prizeMoney: { first: "₹1000" },
        minimumParticipation: "1",
        rules: {
          game: [
            "Rule 1",
            "Rule 2",
            // other rules...
          ],
        },
      },
      {
        name: "Human Ludo",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSdLQAoLSwJIl9XhfHaCt2ZYD5YPb-Z6KXK39BNWgUJE35Inpw/viewform?usp=header",
        time: "15 minutes",
        date: "7th March",
        venue: "Parking Area",
        // participants: "Teams of 4",
        entryFee: "₹50 per participant",
        prizes: "Certificates for winners",
        description:
          "A life-sized version of Ludo where participants act as tokens.",
        mode: "Offline",
        type: "Single",
        prizeMoney: { first: "₹500", second: "₹250" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Players act as tokens and must move according to dice rolls.",
            "The game follows standard Ludo rules (a player must roll a 6 to enter the board).",
            "Special challenge spots include trivia or mini-games, which must be completed to proceed.",
            "If a team lands on the same spot as another, they can send the opponent back to the start.",
            "The first team to get all their members to the finish wins.",
          ],
          general: [
            "Follow all instructions given by the event organizers.",
            "Any form of misconduct will lead to disqualification.",
          ],
        },
      },
      {
        name: "Treasure Hunt",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSf5MCwMTZ20t-hD3y82AZ46-06Bj2APqILmdG-D_YUhlwNrVA/viewform?usp=header",
        time: "45 minutes",
        date: "7th March",
        venue: "Amphitheatre",
        participants: "Group",
        entryFee: "₹250",
        prizes: "Trophy/Certificates",
        description:
          "A hunt-based event where participants solve clues and find hidden items across the campus.",
        mode: "Offline",
        type: "5 Members",
        prizeMoney: { first: "₹1000", second: "₹500" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Players will be given the first clue at the starting point.",
            "Each clue will lead to the next hidden clue.",
            "Clues must be solved within the time limit.",
            "The participant who finds the treasure first wins.",
            "No external help (internet, friends, etc.) is allowed.",
            "Any form of misconduct will lead to disqualification.",
          ],
        },
      },
      {
        name: "Beyond the Brush",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLScuxZ_GpzM0mJ2PiNc50jFDmOYyLA6KXhtGTpyNSSkcrYDF4A/viewform?usp=header",
        time: "30 minutes",
        date: "8th March",
        venue: "Classroom",
        participants: "1",
        entryFee: "₹50 per participant",
        prizes: "Certificates for the most creative paintings",
        description:
          "Participants use unconventional tools like feathers, earbuds, vegetables, or threads to create unique artwork. Paint Brushes are not allowed.",
        mode: "Offline",
        type: "Individual",
        prizeMoney: { first: "₹500", second: "₹250" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Only unconventional tools like feathers, earbuds, vegetables, or threads can be used.",
            "Paintbrushes are strictly not allowed.",
            "Participants must bring their own materials unless provided.",
            "Judges will evaluate based on creativity, technique, and visual appeal.",
            "No pre-made sketches or tracing is allowed.",
          ],
        },
      },
    ],
  },
  {
    title: "Cultural Events",
    description:
      "Showcase your artistic talents and cultural prowess in our diverse range of cultural events.",
    backgroundImage: "https://picsum.photos/240/320?random=3",
    details: [
      {
        name: "Pixel's Got Vocal",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSduVsWcqyVmGEWgxZjr_5jO_989sKW6V5fgZfia38CV-PvoWg/viewform?usp=header",
        time: "3-5 minutes per performance",
        date: "8th March",
        venue: "Stage - Main Parking Area",
        participants: "Single ",
        entryFee: "₹200 per participant",
        prizes: "Trophy and Certificates for top performers",
        description:
          "A high-energy competition featuring various performing arts.",
        mode: "Online/Offline",
        type: "Solo ",
        prizeMoney: { first: "₹1000 per category" },
        minimumParticipation: "20 participants",
        rules: {
          general: [
            "No participant may point out any specific individual or religion in any manner.",
            "Participants will be judged based on content, fluency, spontaneity, presentation, and sense of humour.",
            "Exceeding the time limit (3-5 minutes) will result in negative marking.",
            "Performances must be free from foul language, abusive words, or inappropriate gestures.",
            "The use of offensive jokes, hate speech, or disrespect towards any community will result in immediate disqualification.",
            "Participants must reach the venue at least 1 hour before the event begins.",
            "All participants must adhere strictly to these rules. The organizing committee reserves the right to take necessary action if required.",
          ],
          game: [
            "Participants will perform solo or in groups in their chosen category (e.g., Singing, Rap, Beatboxing, or Shayari).",
            "Time limit: 3-5 minutes per participant or group.",
            "A maximum of 3 entries per contingent is allowed.",
          ],
        },
      },
      {
        name: "Battle of Bands",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSdg40qAK2I0-z0AgWEMi0UVcsm9G6H-I0nojKMCcB_IdLChzw/viewform?usp=header",
        time: "6 minutes per act",
        date: "7th March",
        venue: "Stage - Main Parking Area",
        participants: "Group",
        entryFee: "₹500",
        prizes: "Certificates for top 3 performers",
        description:
          "An electrifying showdown of talent, energy, and music! Bands will compete to own the stage and win the ultimate title. Who will steal the spotlight? Let the battle begin! 🔥🎶",
        mode: "Offline",
        type: "Team",
        prizeMoney: { first: "₹2500" },
        minimumParticipation: "5 Teams",
        rules: {
          general: [
            "No participant may include offensive content, political remarks, or disrespect towards any community.",
            "Bands will be judged based on musicality, stage presence, crowd engagement, originality, and technical skills.",
            "Exceeding the time limit (6 minutes including setup & soundcheck) will result in negative marking.",
            "Performances must be free from foul language, offensive lyrics, or inappropriate gestures.",
            "The use of pre-recorded backing tracks (except for electronic elements explicitly allowed) is prohibited.",
            "Participants must reach the venue at least 1 hour before the event begins for setup and soundcheck.",
            "All participants must adhere strictly to these rules. The organizing committee reserves the right to take necessary action if required.",
          ],
          game: [
            "Each band must have a minimum of 3 members.",
            "Each band gets 6 minutes to perform, including setup and soundcheck.",
            "Both original compositions and covers are allowed, but song selection must be appropriate for a college audience.",
            "Basic sound equipment (mics, amplifiers, drum kit) will be provided; bands must bring their own instruments.",
            "Bands must inform the organizers in advance if they require any special technical setup.",
          ],
        },
      },
      {
        name: "Dil Dhadakne Do",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLScXYQE9YmjpXM92rA5BGXQeITBConfJ_qOf6Z-ldhxTsFd__w/viewform?usp=header",
        time: "30-45 minutes",
        date: "8th March",
        venue: "Stage - Main Parking Area",
        participants: "Single/Group",
        entryFee: "Solo-200/Group-500",
        prizes: "Certificates for top 3 photos",
        description:
          "Participants click photographs on campus and explain the story behind their best picture.",
        mode: "Offline",
        type: "Solo/Group",
        prizeMoney: { first: "Solo-1000/Group-2500" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "The competition is open to all dance styles.",
            "Inappropriate printed shirts/t-shirts, vulgarity in songs, or inappropriate gestures will not be tolerated.",
            "Use of props is allowed, but a list of props must be submitted beforehand.",
            "No restrictions on the number of songs used, but all music must be free of abusive words (beeped/muted).",
            "The judge's decision will be final and binding.",
            "Participants must submit their audio files in MP3 format at least one day prior •	Rename the file as [Participant’s Name/Team’s Name]_[CC Code].mp3",
            "CDs or external drives will not be accepted.",
            "Participants must reach the venue at least 1 hour before the event starts.",
            "Obscene language or gestures will result in disqualification.",
            "Every participant must strictly adhere to these rules. The organizing committee reserves the right to take necessary action.",
          ],
          "Solo Dance Rules": [
            "Solo participation only.",
            "Final round: Participants must perform their own choreography/optional (Participants will be given a theme for their performance).",
            "Time limit for the Final round: 3-4 minutes.",
            "Maximum 3 entries per contingent.",
          ],
          "Group Dance Rules": [
            "Team size: 2-10 members. (Duo entries count as a group)",
            "All dance forms are allowed.",
            "Final round: Participants must perform their own choreography /optional (Participants will be given a theme for their performance).",
            "Time limit for the Final round: 5-6 minutes.",
            "2 teams per contingent is allowed.",
          ],
        },
      },
      {
        name: "Fashion Show",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLScDsr5viMHLeUfNOXSwZYGbisOCX9YpSWNo3IOejBteoqZVYw/viewform?usp=header",
        time: "30-45 minutes",
        date: "8th March",
        venue: "Stage - Main Parking Area",
        participants: "Teams of 3-4",
        entryFee: "₹100 per participant",
        prizes: "Certificates for winners",
        description:
          "Inspired by game shows, participants complete challenges like singing lyrics or trivia to avoid elimination.",
        mode: "Offline",
        type: "Group",
        prizeMoney: { first: "₹3000", second: "1500" },
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
            "Obscene language or gestures will result in disqualification.",
          ],
          groupDance: [
            "Team size: 2-10 members (Duo entries count as a group).",
            "Final round: Participants must perform their own choreography (optional theme provided).",
            "Time limit for the Final round: 5-6 minutes.",
            "2 teams per contingent is allowed.",
          ],
        },
      },
      {
        name: "War of DJs",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSednLA14INPWlhKybvl3GoOSH_V5TTGnTRnk_3igLyf1xVyAg/viewform?usp=header",
        time: "10 minutes per performance",
        date: "7th March",
        venue: "Stage - Main Parking Area",
        participants: "Single",
        entryFee: "₹500",
        prizes: "Trophy and Certificates for top DJs",
        description:
          "DJs showcase mixing skills and engage the audience with creative transitions and live mixes.",
        mode: "Offline",
        type: "Solo",
        prizeMoney: { first: "₹2500" },
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
            "Handle equipment with care – Any damage is the participant's responsibility.",
            "Arrive 1 hour before the event – Latecomers may be disqualified.",
          ],
          game: [
            "Time limit: 5 minutes per participant.",
            "A maximum of 1 entry per contingent is allowed.",
          ],
        },
      },
    ],
  },
  {
    title: "Sports Events",
    description:
      "Compete in various sports events and showcase your athletic abilities.",
    backgroundImage: "https://picsum.photos/240/320?random=4",
    details: [
      {
        name: "Box Cricket (6v6)",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSefI611jXIXEPDx-nMAKtX7CFRjJVb_EXHut5yUF6pkm87WAw/viewform?usp=header",
        time: "20 minutes per match",
        date: "6th & 7th March",
        venue: "Canteen Area",
        participants: "Teams of 6 players",
        entryFee: "₹800 per team",
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
            "The organizing committee reserves the right to make changes to the tournament or rules.",
            "If the teams do not report by time it will lead to disqualification.At least 2 players from the team should be present to start the game.",
          ],
        },
      },
      {
        name: "Futsal (3v3)",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSe2hD4au0UTDTWZ1Sxp12QpcIaDVqSVdfN_kno-vpiPi2QAxg/viewform?usp=header",
        time: "10 min game",
        date: "7th March",
        venue: "Quadrangle",
        participants: "Teams of 3+1 (Rolling sub)",
        entryFee: "₹400 per team",
        prizes: "Trophies and Special awards",
        description:
          "A fast-paced, small-sided football game with knockout matches.",
        mode: "Offline",
        type: "Group",
        prizeMoney: { first: "₹2500", second: "₹1000" },
        minimumParticipation: "10 teams",
        rules: {
          game: [
            "Game Format: 3+1 rolling sub.",
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
            "Referee's decision is final.",
          ],
        },
      },
      {
        name: "Chess",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSc5hn4U_nk5hHUPnb8Bct-58ZOpzbz17muZ_tPXwf-9cCMstQ/viewform?usp=header",
        time: "15 points per set, best of 3 sets",
        date: "7th March",
        venue: "Sports Room",
        participants: "solo",
        entryFee: "₹100 ",
        prizes: "Trophies, Certificates, Special recognition for Best Player",
        description: "Showcase your Chess Skills", // Note: Description seems incorrect; should be chess-related
        mode: "Offline",
        type: "Solo",
        prizeMoney: { first: "exciting prize to be announced", },
        minimumParticipation: "7 participants",
        rules: {
          game: ["Follows Chess rules."],
        },
      },
      {
        name: "Badminton",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSc42mhbKDC7VS69_hkuWvZ6SrndZllUdF7RFYOXgHlKt5Qg5w/viewform?usp=header",
        time: "20-minute halves (40 minutes total)",
        date: "8th March",
        venue: "Quadrangle",
        participants: "Single",
        entryFee: "₹100",
        prizes:
          "Trophies, Certificates, Awards for Best Goalkeeper and Top Scorer",
        description:
          "Full-field Badminton matches with knockout-based tournament.", // Note: Description seems incorrect; should be badminton-related
        mode: "Offline",
        type: "Solo",
        prizeMoney: { first: "exciting prize to be announced" },
        minimumParticipation: "10 participants",
        rules: {
          general: [
            "All participants must report 15 minutes before their scheduled match time.",
            "Players must bring their own rackets. Shuttlecocks will be provided by the organizers.",
            "Proper sports attire and non-marking shoes are mandatory.",
            "The referee's decision will be final and binding in all matters.",
            "Any misconduct or unsportsmanlike behavior will result in immediate disqualification.",
          ],
          game: [
            "The league stage will have 1 set format for each category, played to 15 points.",
            "If a player/team wins the first two out of three sets, no further matches will be played.",
            "Service and side selection will be decided by a toss.",
            "Semi-finals and finals will follow a best-of-three sets format, with each set played to 21 points.",
            "All standard Badminton World Federation (BWF) rules apply.",
            "Players will be allowed a 1-minute break between ongoing matches.",
            "A 2-minute interval is allowed between each game, no additional timeouts will be granted.",
            "In case of a tie at 20-20, the set continues until one player/team gains a 2-point lead or reaches 30 points.",
          ],
          winningCriteria: [
            "The tournament will follow a knockout format.",
            "Winners advance to the next round until the finals.",
            "In case of any dispute, the organizing committee's decision will be final.",
          ],
        },
      },
      {
        name: "Carrom",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSdaoKZ_DRl8bIaqlDzdh6xuT0n5KF0KASixqLIjBbEhqVM6_g/viewform?usp=header",
        time: "5-over matches (approximately 45 minutes)",
        venue: "Sports Room",
        date: "8th March",
        participants: "Solo",
        entryFee: "₹100 per team",
        prizes:
          "Trophies, Certificates, Awards for Best Batsman and Best Bowler",
        description: "Showcase you carro Skills", // Note: Description seems incorrect; should be carrom-related
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
            "A player can only pocket the queen after pocketing at least one of their own coins.",
          ],
        },
      },
      {
        name: "Table Tennis",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLScmUBbUv32e1QXXZd34FaNowIN4daFx4x074bobk-Go2EH9ZQ/viewform?usp=header",
        time: "5-over matches (approximately 45 minutes)",
        date: "8th March",
        venue: "Sports Room",
        participants: "Single",
        entryFee: "₹100 per team",
        prizes:
          "Trophies, Certificates, Awards for Best Batsman and Best Bowler",
        description:
          "Show off your speed and precision in our thrilling table tennis tournament! Players will compete in a 1v1 format, following standard rules. Outsmart your opponent with skillful shots and quick reflexes to advance to the next round! 🏓🔥",
        mode: "Offline",
        type: "Solo",
        prizeMoney: { first: "exciting prize to be announced" },
        minimumParticipation: "5 participants",
        rules: {
          game: [
            "Matches follow the best-of-3 sets format, with finals played in best-of-5 sets.",
            "Each set is played to 11 points, and a player must win by at least 2 points.",
            "Players must switch sides after each set.",
            "Each player/team is allowed one timeout (30 seconds) per match.",
            "The ball must be tossed at least 16 cm vertically during service.",
            "A legal serve must be made behind the baseline and above the table surface.",
            "Doubles matches require teammates to alternate shots during a rally.",
            "If the score reaches 10-10, deuce rules apply (win by 2 points).",
            "Touching the table with a free hand during play results in a point loss.",
            "If the ball touches the net on a serve but lands correctly, it is a let serve and must be replayed.",
            "Players must report at least 10 minutes before their scheduled match.",
            "Misconduct, including arguing with the referee or unsportsmanlike behavior, will lead to disqualification.",
            "Referee's decision is final.",
          ],
        },
      },
    ],
  },
  {
    title: "E-Sports Events",
    description:
      "Battle it out in the digital arena with our exciting E-Sports tournaments.",
    backgroundImage: "https://picsum.photos/240/320?random=5",
    details: [
      {
        name: "Valorant",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLScrvGMhcciCHE2gXaOXhyXV3Cs4z04UAZD8yQksys1G1i26Mg/viewform?usp=header",
        time: "30 minutes per match",
        date: "7th March",
        venue: "E-Sports Arena",
        participants: "Teams of 5 players",
        entryFee: "₹500 per team",
        prizes: "Trophies and Certificates",
        description:
          "Tactical shooter with an Unrated custom match and a knockout format.",
        mode: "Offline",
        type: "Group",
        prizeMoney: { first: "₹2000" },
        minimumParticipation: "10 teams",
        rules: {
          game: [
            "Mode: Standard (First to 13 rounds wins).",
            "Allow Cheats: OFF.",
            "Overtime: Win by Two.",
            "The competition will follow a knockout format, with the finals played in a best-of-three format.",
            "For the knockout stage, the map will be Ascent.",
            "For the finals, the three maps will be Bind, Split, and Haven, in the order specified.",
            "The same account must be used for all matches during the tournament.",
            "Team names and usernames must not contain vulgarities, obscenities, or anything inappropriate.",
            "Match procedures state that if a player disconnects before the match starts, the organizers must be informed.",
            "You can bring your own peripherals.",
          ],
        },
      },
      {
        name: "BGMI",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSc088uC5nCZk9ao4jNsTV0QsQhbyjvmnkNeyipOo83decP4gg/viewform?usp=header",
        time: "30-40 minutes per match",
        date: "7th March",
        venue: "E-Sports Arena",
        participants: "Teams of 4 players",
        entryFee: "Free",
        prizes: "Trophies and Certificates for top teams",
        description:
          "Competitive shooting games with Battle Royale or objective-based matches.",
        mode: "Offline",
        type: "Group",
        prizeMoney: { first: "₹9000", second: "₹5000", third:"₹3000", fourth:"₹2000", fifth:"₹1000" },
        minimumParticipation: "10 teams",
        rules: {
          bgmi: [
            "Two classic matches will be played on two different maps in the following order: Erangel, Miramar, and Sanhok or Vikendi.",
            "Final match will consist of 3 matches (Erangel, Sanhok, Miramar).",
            "Players are restricted to using phones only; the use of tablets is not permitted.",
            "If a player is found using mods or aim bots, the team will be disqualified from the event.",
            "All players must download the required maps; if they get kicked out at the start of the event, it's their responsibility.",
            "Ensure their device is fully charged.",
            "Point system: 1 point per kill.",
          ],
          // cod: [
          //   "5v5 format.",
          //   "Standard S&D rules.",
          //   "No hacks.",
          //   "Map rotation: Summit, Raid, Firing Range, etc.",
          //   "BO3 or BO5 format (depending on time).",
          //   "Players must submit their game IDs before the match.",
          // ],
        },
      },
      {
        name: "FIFA (1v1)",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSeDVq_m1osG2isDuLU2oQoEBawDSfmYs3_J5hIBemND9_hFQA/viewform?usp=header",
        time: "10-15 minutes per match",
        date: "7th March",
        venue: "E-Sports Arena",
        participants: "Solo",
        entryFee: "₹100 ",
        prizes: "Certificates for top teams",
        description: "Football simulation with knockout-based tournament.",
        mode: "Offline",
        type: "solo",
        prizeMoney: { first: "1000" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Game Length: 6 minutes per half.",
            "Difficulty Level: Legendary, Ultimate.",
            "Game Speed: Normal.",
            "Disconnects/Lag: Rules for handling these situations (e.g., rematches, forfeits).",
            "No Goal Kicks/Corners Glitch Exploitation: If there are any known exploits, disallow them.",
            "Sportsmanship: Expected.",
            "Cheating: Absolutely prohibited.",
          ],
        },
      },
      {
        name: "Mortal Kombat (1v1)",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSevUe6yWtMrF4qfGjHMfVaV8mK98-RI-DMy_OQ7-ZvXFZ3tyw/viewform?usp=header",
        time: "5-10 minutes per match",
        date: "8th March",
        venue: "E-Sports Arena",
        participants: "Single",
        entryFee: "₹100 per participant",
        prizes: "Certificates for top 3 players",
        description: "Fighting game with 1v1 matches and knockout format.",
        mode: "Offline",
        type: "Solo",
        prizeMoney: { first: "1000" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Tournament Format: Single or Double Elimination (depending on participant count).",
            "Best-of-3 games per match.",
            "Character Selection: Winning player of previous match chooses character first, losing player chooses last.",
            "In-Game Settings: 90-second timer, Tournament Mode Default Options, Arena Select: Off, Interactable: On.",
            "Leaving Games Early: Strongly discouraged. Penalties for repeated quitting.",
            "Disconnects: Round forfeited. Match continues unless mutually agreed to restart.",
            "Sportsmanship: Expected.",
          ],
        },
      },
      {
        name: "Stumble Guys",
        registrationLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSf7E5hPXHr2ZEDuCyJbCjBpi9MdgZKQrTasnMSfmDO_mwIgOw/viewform?usp=header",
        time: "10-15 minutes per match",
        date: "8th March",
        venue: "E-Sports Arena",
        participants: "Single",
        entryFee: "₹100 per participant",
        prizes: "Certificates for top players",
        description:
          "Multiplayer obstacle course game with quick reflexes and timing.",
        mode: "Offline",
        type: "Solo",
        prizeMoney: { first: "500" },
        minimumParticipation: "Not specified",
        rules: {
          game: [
            "Standard Stumble Guys rules apply.",
            "Judged on speed and completion.",
          ],
        },
      },
    ],
  },
  // {
  //   title: "Fun Events",
  //   description:
  //     "Engage in fun and exciting events that test your skills and have a good time.",
  //   backgroundImage: "https://picsum.photos/240/320?random=6",
  //   details: [
  //     {
  //       name: "Minute to Win It",
  //       time: "15-20 minutes",
  //       venue: "Main Ground",
  //       participants: "Single",
  //       entryFee: "₹10 per participant",
  //       prizes: "Certificates for top 3 scorers",
  //       description:
  //         "Quick challenges completed in under a minute, testing speed and accuracy.",
  //       mode: "Offline",
  //       type: "Solo",
  //       prizeMoney: { first: "Certificates" },
  //       minimumParticipation: "Not specified",
  //       rules: {
  //         game: [
  //           "Participants complete quick challenges within a minute.",
  //           "Judged on speed and accuracy."
  //         ]
  //       }
  //     },
  //     {
  //       name: "Mystery Box",
  //       time: "5 minutes per team",
  //       venue: "Main Ground",
  //       participants: "Teams of 3-4",
  //       entryFee: "₹50 per participant",
  //       prizes: "Certificates for winners",
  //       description:
  //         "Teams open a box with items hinting at a Bollywood song and must perform it.",
  //       mode: "Offline",
  //       type: "Group",
  //       prizeMoney: { first: "Certificates" },
  //       minimumParticipation: "Not specified",
  //       rules: {
  //         game: [
  //           "Teams open a box with items hinting at a Bollywood song.",
  //           "Teams must perform the song within 5 minutes."
  //         ]
  //       }
  //     }
  //   ]
  // }
];
