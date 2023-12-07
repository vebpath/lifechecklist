
  let main = document.querySelector('main')
  let lifeEvents =[
    "👶 Be born",
    "🚶‍ Take first steps",
    "📣 Say first words",
    "👨‍🏫 Learn to read",
    "🤗 Make a friend",
    "🚴‍ Learn to ride a bike",
    "📗 Read a book",
    "💓 Subscribed WebPath",
    "🏊‍ Learn to swim",
    "🏫 Finish elementary school",
    "⚽ Play a sport",
    "🛫 Fly in a plane",
    "🛥️ Ride a boat",
    "🚆 Ride in a train",
    "🚁 Ride a helicopter",
    "🌊 See the ocean",
    "❄️ See snow",
    "☃️ Make a snowman",
    "🏫 Finish middle school",
    "🎶 Go to a concert",
    "🏕️ Go camping",
    "🎢 Ride a rollercoaster",
    "🎻 Play an instrument",
    "💋 Get kissed",
    "💳 Get a credit card",
    "🚘 Start driving",
    "🗺️ Go on a roadtrip",
    "🗾 Visit another country",
    "🎤 Give a speech",
    "🏫 Graduate high school",
    "🌐 Learn another language",
    "💸 Invest some money",
    "📷 Meet an idol",
    "😩 Make a terrible mistake",
    "🏆 Win a trophy",
    "⛰️ Climb a mountain",
    "🎽 Run a marathon",
    "🍳 Learn to cook",
    "🔦 Explore a cave",
    "🌋 See a volcano",
    "🎓 Graduate college",
    "💕 Have a long relationship",
    "🖊️ Sign a contract",
    "🏢 Get a job",
    "☝️ Get promoted",
    "💵 Get a paycheck",
    "🔥 Get fired",
    "📰 Get in the news",
    "🗳️ Vote in an election",
    "🤡 Switch careers",
    "🏠 Buy a house",
    "💍 Get engaged",
    "👰 Get married",
    "👶 Have a kid",
    "🚶‍ Teach your kid to walk",
    "📣 Teach your kid to talk",
    "🎓 Watch your kid graduate",
    "👰 Watch your kid get married",
    "👴 Become a grandparent",
    "🏖️ Retire",
    "📔 Tell your grandkid a story",
    "🌑 See a solar eclipse",
    "🌷 Plant a garden",
    "🌎 Travel the world",
    "🎂 Turn 100",
    "✔️ Complete Life Checklist",
  ]



lifeEvents.forEach((e,i)=>{
    let section = document.createElement('section')
    let input = document.createElement('input')
    let label = document.createElement('label')

    input.type = "checkbox"
    input.id = i
    label.setAttribute('for', i)
    label.textContent = e
    section.append(input)
    section.append(label)
    main.append(section)

})
