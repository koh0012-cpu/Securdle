const CASES_EASY = [

{ answer: "Faulty HDMI Cable", clues: [
  "A guy hooking up his new TV keeps losing picture every time he bumps the cable behind the stand.",
  "The screen doesn't go fully black, it flickers with thin horizontal lines for a second before coming back.",
  "Switching to a different HDMI port on the TV does nothing, the problem follows the cable.",
  "He tests the same cable on a totally different device and gets the exact same flickering.",
  "Inside the cable, a few of the tiny copper wires have come loose from years of being coiled and uncoiled."
], explainer: "Usually just a worn or damaged HDMI cable losing signal integrity, not the TV or the source device. Swapping the cable is the first thing to try before blaming anything else." },

{ answer: "GPU Artifacting", clues: [
  "A gamer's screen starts showing weird colored squares scattered across the image mid match.",
  "It only happens during graphically demanding scenes, never on the desktop or in older games.",
  "The pattern looks like a checkerboard of pink and green blocks flickering in and out.",
  "Temps on the graphics card are sitting well above what the manufacturer considers safe.",
  "Lowering the overclock back to stock settings makes the blocks disappear completely."
], explainer: "The graphics card itself struggling, usually from heat, a failing memory chip, or an overclock pushed too far. It's a hardware symptom, not something a game patch will fix." },

{ answer: "Capacitor Plague", clues: [
  "An old desktop from the mid 2000s won't power on most mornings, but works fine by afternoon.",
  "Opening the case, several small cylindrical components on the motherboard look swollen on top.",
  "A couple of them have a crusty brown residue leaking from a tiny vent in the casing.",
  "The power supply was already replaced months ago and the issue is still there.",
  "Those swollen components are capacitors, and a batch made in this era was known to fail this exact way."
], explainer: "A real wave of motherboards and PSUs from the early 2000s were built with capacitors that leaked and bulged over time, causing exactly this kind of unreliable startup behavior." },

{ answer: "HDD Head Crash", clues: [
  "An old external hard drive starts making a rhythmic clicking noise every few seconds.",
  "File transfers that used to take minutes now hang completely, then the drive disconnects on its own.",
  "A specialist who's heard this before calls it the click of death.",
  "Inside, the arm that reads and writes data has begun scraping against the spinning metal platter.",
  "At this point the data is essentially gone unless it goes to a clean room recovery service."
], explainer: "A mechanical failure where the read and write head makes physical contact with the disk surface, usually destroying the data stored there." },

{ answer: "SSD Wear-Out", clues: [
  "A laptop that's been used heavily for five years suddenly can't save any new files.",
  "Existing files open fine, but nothing new will write, and updates fail halfway through.",
  "Diagnostic software shows the drive has switched itself into a read only safety mode.",
  "A counter buried in the drive's health stats shows it's logged an enormous number of write cycles.",
  "The flash memory cells have simply worn out from being rewritten so many times over the years."
], explainer: "Every SSD has a finite number of write cycles before the memory cells degrade. Once that limit is hit, the drive often locks itself to read only to protect whatever data is left." },

{ answer: "Blue Light of Death", clues: [
  "An older game console refuses to boot, the power light just flashes blue and then shuts off.",
  "No picture ever reaches the TV, not even a logo screen.",
  "The console worked fine the day before, with no drops, no spills, nothing unusual.",
  "A repair tech opens it up and finds tiny cracks in the solder connecting the main chip to the board.",
  "Years of heating up and cooling down during normal use slowly fractured those connections until they gave out."
], explainer: "A hardware failure where heat cycling over years causes the solder joints under the main processor chip to crack, a well known issue on certain console generations." },

{ answer: "Thermal Throttling", clues: [
  "A laptop runs noticeably fast for the first few minutes of a video call, then crawls.",
  "Fan noise ramps up to maximum, then the whole thing slows down anyway.",
  "Opening a monitoring tool shows the CPU clock speed dropping sharply right when the fans peak.",
  "The bottom of the laptop is hot enough to be uncomfortable to touch.",
  "Cleaning out years of dust from the heatsink and replacing the dried thermal paste fixes it instantly."
], explainer: "The processor deliberately slowing itself down to avoid overheating, almost always caused by blocked airflow or old, dried out thermal paste no longer transferring heat properly." },

{ answer: "RAM Bit-Flip", clues: [
  "A server that's been rock solid for years suddenly crashes with no warning and no pattern.",
  "It happens maybe once every few months, always a different process, never the same crash twice.",
  "Hardware diagnostics on the CPU, drive, and power supply all come back completely clean.",
  "Eventually a memory scrubbing tool catches a single bit in RAM that flipped from a 0 to a 1 on its own.",
  "With no error correcting memory installed, that one flipped bit was enough to trigger a kernel panic."
], explainer: "Stray radiation or electrical noise can occasionally flip a single bit in memory. It's rare, but without error correcting RAM, even one flipped bit can cause sudden, hard to trace crashes." },

{ answer: "Coil Whine", clues: [
  "Someone fires up a demanding game and immediately hears a faint high pitched squeal from inside the case.",
  "The noise gets louder the higher the frame rate climbs, and vanishes the moment the game is paused.",
  "It's not the fans, they've been unplugged for the test and the sound is still there.",
  "A stethoscope held against the graphics card pinpoints the noise to a cluster of small components near the power connector.",
  "Those are inductor coils vibrating audibly under heavy electrical load."
], explainer: "This high pitched noise comes from tiny coils in the power delivery system vibrating under load. It's usually harmless, just an annoying side effect of how the hardware handles power." },

{ answer: "Pin Bending", clues: [
  "A user upgrades their CPU and the new chip simply won't boot the system at all.",
  "There's no beep code, no display, nothing, just fans spinning and lights on.",
  "Looking closely at the now empty socket, a few of the tiny metal pins are visibly tilted at odd angles.",
  "The chip had been removed and reinserted a couple of times before this happened.",
  "One of those bent pins was never making proper contact, breaking the electrical connection needed to boot."
], explainer: "CPU sockets have hundreds of delicate pins, and even one bent slightly out of place can prevent the system from powering on at all." },

{ answer: "IP Address Conflict", clues: [
  "Two laptops in the same house both lose internet at the exact same moment.",
  "Windows pops up a message saying another device on the network is using the same address.",
  "Restarting the router fixes it for both devices, but only for a little while.",
  "One of the laptops had a manually set static address from months ago that nobody remembered.",
  "That static address happened to fall inside the range the router hands out automatically."
], explainer: "Two devices end up assigned the exact same IP address on the same network, usually because a static address overlaps with the router's automatic pool." },

{ answer: "DNS Propagation Delay", clues: [
  "A small business just moved their website to a new host and updated the domain settings.",
  "The owner can see the new site fine on his phone, but customers report the old site is still showing up.",
  "Clearing the browser cache doesn't help the customers still seeing the old version.",
  "A lookup tool shows different DNS records depending on which country it's run from.",
  "It just takes time for every internet provider's cached copy of those records to expire and refresh worldwide."
], explainer: "DNS changes don't update everywhere instantly. Different networks cache the old records for a while, so it can take anywhere from minutes to a couple of days for everyone to see the change." },

{ answer: "Routing Loop", clues: [
  "An office network suddenly grinds to a crawl right after a junior IT tech reconfigures one of the routers.",
  "A simple ping to a printer down the hall takes several seconds to respond instead of milliseconds.",
  "Traceroute shows the same handful of routers being visited over and over in a repeating circle.",
  "A static route was added that pointed traffic right back toward where it came from.",
  "Packets are bouncing endlessly between two routers that each think the other one is the correct path forward."
], explainer: "Routers disagree about the best path and end up forwarding the same traffic back and forth in circles until it eventually gets dropped, eating up bandwidth the whole time." },

{ answer: "Broadcast Storm", clues: [
  "An entire factory floor's network drops to a standstill all at once.",
  "Every switch on the floor has its activity lights lit up solid, not blinking like normal traffic.",
  "It started right after a new, cheap unmanaged switch was plugged in to extend a cable run.",
  "That new switch was accidentally connected to the network with both of its cable ends, forming a loop.",
  "With no loop prevention enabled, broadcast traffic kept circling and multiplying until it choked out everything else."
], explainer: "A physical loop in the network lets broadcast traffic copy itself endlessly, flooding every device until normal traffic can't get through." },

{ answer: "DHCP Pool Exhaustion", clues: [
  "At a busy conference, new attendees connecting to the venue WiFi just can't get online at all.",
  "People who connected earlier in the day are fine, it's only new connections failing.",
  "Their devices sit there trying to get an address forever and eventually give up.",
  "IT pulls up the network dashboard and sees the address pool sitting at 100 percent allocated.",
  "The venue simply didn't plan for this many devices, and ran out of available addresses to hand out."
], explainer: "Every network has a limited range of addresses it can assign automatically. Once that pool runs dry, new devices can't get connected until old leases expire or the range is expanded." },

{ answer: "Packet Loss", clues: [
  "A remote worker's video calls keep freezing for a split second every few minutes.",
  "It's not just calls, downloads stall briefly too and then resume on their own.",
  "A continuous ping test to a reliable outside server shows a small but steady percentage of replies never coming back.",
  "The issue follows the laptop even when plugged directly into the router with a cable.",
  "An old, slightly damaged section of cable buried in the wall turns out to be the cause."
], explainer: "Some percentage of data simply never arrives at its destination, often from a damaged cable, interference, or an overloaded connection along the way." },

{ answer: "Wi-Fi Channel Congestion", clues: [
  "A resident in a crowded apartment building complains their WiFi is fine at 3am but unbearable by 8pm.",
  "Speed tests show the connection itself, the modem, and the provider are all working perfectly.",
  "A WiFi analyzer app reveals a dozen neighboring networks all broadcasting on the exact same channel.",
  "Switching the router to a less crowded channel in the settings makes an immediate, noticeable difference.",
  "With so many overlapping networks fighting for the same slice of radio frequency, everyone's signal degrades during peak hours."
], explainer: "In dense buildings, too many WiFi networks crammed onto the same channel interfere with each other, especially during busy hours when everyone's online at once." },

{ answer: "BSOD", clues: [
  "A Windows desktop suddenly cuts to a solid blue screen full of text in the middle of normal use.",
  "It happens at random, sometimes during a game, sometimes just browsing, never anything consistent.",
  "A stop code printed on the screen points toward a specific driver file.",
  "That driver was for a graphics card update installed earlier in the week.",
  "Rolling back to the previous driver version stops the crashes entirely."
], explainer: "Windows hitting a fatal error it can't recover from, usually triggered by a misbehaving driver or a genuine hardware fault, and stopping everything to prevent further damage." },

{ answer: "Kernel Panic", clues: [
  "A Mac suddenly goes dark and restarts itself with no warning while someone's working.",
  "After it reboots, a notification appears saying the computer restarted because of a problem.",
  "It only seems to happen since a particular piece of third party software was installed.",
  "That software included a low level extension that hooks deep into how the operating system handles hardware.",
  "That extension was conflicting badly enough that macOS had to halt everything immediately to prevent damage."
], explainer: "The Unix based equivalent of a fatal crash, where the core of the operating system hits an error so serious it has no choice but to stop everything and restart." },

{ answer: "Memory Leak", clues: [
  "A web browser left open overnight is using more memory than the rest of the computer combined.",
  "Closing tabs one by one barely reduces the memory usage at all.",
  "It only fully goes back to normal after completely restarting the browser.",
  "A particular extension turns out to be the common factor every time this happens.",
  "That extension keeps allocating memory for background tasks and never properly releases any of it."
], explainer: "Some software keeps grabbing memory for tasks and forgets to give it back when it's done. Over time that adds up until the system is starved of available RAM." },

{ answer: "DLL Hell", clues: [
  "A program that's worked fine for years suddenly refuses to launch after installing unrelated software.",
  "The error message references a shared library file with a version number that doesn't match what's expected.",
  "Uninstalling the new software brings the old program back to life immediately.",
  "It turns out the new installer silently replaced a shared system file with an older version.",
  "Multiple programs on the machine were quietly depending on that exact file, and now they're all conflicting."
], explainer: "What happens when different programs share the same library files but expect different versions of them, and one installer overwrites a file another program still needs." },

{ answer: "Race Condition", clues: [
  "An online store occasionally lets two customers buy the very last item in stock at the same exact second.",
  "It only ever happens during flash sales when checkout traffic spikes massively.",
  "The inventory check and the inventory update aren't happening as one single uninterrupted step.",
  "Both orders read one item left at the same instant, before either purchase had finished updating the count.",
  "Whichever order's database update runs microseconds after the other simply overwrites it, creating an oversell."
], explainer: "Happens when the outcome depends on the exact timing of two processes running at once, and they end up interleaved in a way the programmer never intended." },

{ answer: "Registry Corruption", clues: [
  "A Windows machine starts taking five minutes just to reach the login screen.",
  "Random settings keep reverting on their own, like the default browser or the desktop wallpaper.",
  "A repair tool flags errors in the configuration database but can't fully fix them.",
  "It started right after the power went out mid update during a forced restart.",
  "Key entries in the registry got partially written before the power cut, leaving the whole structure inconsistent."
], explainer: "The registry holds nearly all of Windows' settings in one central database, and if it gets damaged mid write, usually from a crash or power loss, things start behaving unpredictably." },

{ answer: "Dependency Hell", clues: [
  "A developer tries to install a new tool for a project and the install just refuses to finish.",
  "The error names two other packages that apparently require incompatible versions of the same library.",
  "Updating one of them to fix the conflict immediately breaks three other tools that depended on the old version.",
  "Every fix seems to just shift the same conflict somewhere else in the chain.",
  "The project has years of accumulated tools that were never built with each other's requirements in mind."
], explainer: "Happens when software depends on other software, which depends on more software, and somewhere in that chain two pieces need incompatible versions of the exact same thing." },

{ answer: "Zombie Processes", clues: [
  "A Linux server's process list is slowly filling up with entries that finished running ages ago but are still listed.",
  "They're not using any CPU or memory, they just sit there cluttering the list.",
  "The process IDs are technically still allocated, which is starting to cause new programs to fail to start.",
  "Each completed process never had its exit status collected by whatever started it.",
  "Without that final check, the operating system keeps a placeholder for it indefinitely."
], explainer: "When a child process finishes but its parent never checks on it to clean it up, it lingers in the system as a harmless but annoying leftover entry." },

{ answer: "API Rate Limiting", clues: [
  "A developer's app works perfectly during testing but starts failing constantly once real users show up.",
  "Every failed request comes back with the exact same error code, 429.",
  "It only happens during the busiest hours of the day, never overnight.",
  "The app is making far more requests per minute to an outside service than that service allows for free accounts.",
  "The service is intentionally rejecting the extra requests to stop any one user from overwhelming its servers."
], explainer: "Most APIs cap how many requests you can make in a given time window. Going over that limit gets you a 429 error until the window resets." },

{ answer: "Ransomware", clues: [
  "A hospital's front desk computer suddenly shows a red screen instead of the usual scheduling software.",
  "Every file on the shared drive now ends in a strange new file extension nobody recognizes.",
  "A countdown timer sits next to a demand for payment in cryptocurrency.",
  "IT traces the entry point back to an unpatched remote access port that had been left open to the internet.",
  "Files were encrypted folder by folder, and the only way back in is the attacker's key or a clean backup."
], explainer: "Locks up a victim's files with strong encryption and demands payment for the key to unlock them. Many versions now also steal a copy of the data first and threaten to leak it regardless." },

{ answer: "Crypto-Jacking", clues: [
  "An office worker notices their laptop fan is screaming even when nothing demanding is open.",
  "Battery life has dropped to a fraction of what it used to be.",
  "Task manager shows a process using almost all the CPU that nobody can identify by name.",
  "It traces back to a script that quietly started running after visiting a sketchy website days earlier.",
  "That script has been using the laptop's processor in the background to mine cryptocurrency for someone else."
], explainer: "Hijacks a device's processing power without permission to mine cryptocurrency for the attacker, usually noticed through overheating, fan noise, and a sudden drop in performance." },

{ answer: "Spyware", clues: [
  "A small business owner starts seeing competitors somehow always undercut bids right after she submits them.",
  "Her computer hasn't shown any obvious symptoms, no popups, no slowdown.",
  "A security scan eventually finds a hidden program logging every keystroke and screenshotting the screen periodically.",
  "It's been quietly sending that data out to a remote server for months.",
  "It was installed without her knowledge through a free tool she'd downloaded a while back."
], explainer: "Runs silently in the background, recording activity like keystrokes or screen content and sending it to whoever installed it, often without any visible symptoms at all." },

{ answer: "Adware", clues: [
  "A user's browser starts opening random popup tabs constantly, even on sites that normally have none.",
  "A new toolbar she doesn't remember installing has appeared at the top of the browser.",
  "Search results now route through an unfamiliar search engine before reaching the real results.",
  "It started right after installing a free PDF converter from a site she found through a search ad.",
  "That free tool bundled in extra software designed purely to flood her browser with forced advertising."
], explainer: "Sneaks in alongside other downloads and exists purely to bombard the user with ads, hijack their browser settings, or redirect their searches for ad revenue." },

{ answer: "Trojan Horse", clues: [
  "A gamer downloads what looks like a popular game's cracked version from a forum.",
  "The game itself runs and plays completely normally with no obvious issues.",
  "Weeks later, friends report receiving strange messages from his account that he never sent.",
  "A scan finds a second hidden program bundled inside the original download that's been running ever since.",
  "That hidden program had been quietly giving someone remote access to his machine the whole time."
], explainer: "Disguises itself as something legitimate or desirable, but once run, it opens a hidden door for an attacker, often without the user ever realizing anything was wrong." },

{ answer: "Computer Worm", clues: [
  "One infected laptop connects to a university's network, and within hours dozens more machines show the same symptoms.",
  "None of the other machines had any files downloaded or any links clicked.",
  "IT notices each newly infected machine immediately starts scanning the network for more vulnerable devices on its own.",
  "It's spreading through an old, unpatched vulnerability most machines on campus still have running.",
  "The thing is spreading entirely on its own from machine to machine with zero human interaction required."
], explainer: "Unlike most malware, this kind doesn't need anyone to click anything. It actively scans for vulnerable machines and copies itself across a network completely on its own." },

{ answer: "Rootkit", clues: [
  "An antivirus scan on a company laptop comes back completely clean, but something still feels off.",
  "Task manager and the file explorer both show nothing unusual at all.",
  "A specialist boots the machine from an external drive instead of its normal operating system to look around.",
  "From that outside vantage point, an entire set of hidden files and processes suddenly becomes visible.",
  "The malware had buried itself deep enough in the system to hide from anything running through the normal OS."
], explainer: "Burrows deep into a system to hide its own existence from normal detection tools, often requiring specialized scans from outside the infected operating system to even find it." },

{ answer: "Keylogger", clues: [
  "A college student's social media and email passwords keep getting changed by someone else, again and again.",
  "He's already changed his passwords three times and turned on two factor everywhere he can.",
  "It keeps happening anyway, within days of each password change.",
  "A check of his laptop finds a tiny background process recording every key he presses.",
  "That program has been capturing his new passwords the moment he types them, before two factor even matters."
], explainer: "Records every keystroke a person makes, capturing passwords and messages as they're typed, regardless of how often the passwords themselves get changed afterward." },

{ answer: "Wiper", clues: [
  "A company's servers go completely dark overnight with zero ransom note and zero demand.",
  "Every single file on every affected machine is just gone, not encrypted, gone.",
  "Recovery specialists confirm there's no key to recover because nothing was ever encrypted for ransom.",
  "The malware's only function, as far as anyone can tell, was permanent destruction.",
  "This matches the behavior of malware built purely to destroy data, not to profit from it."
], explainer: "Unlike ransomware, this isn't designed to extort anyone. It's built purely to permanently destroy data, often used in attacks meant to disrupt or sabotage rather than make money." },

{ answer: "Fileless Malware", clues: [
  "A security team's antivirus shows nothing unusual, no new files were ever written to disk.",
  "Network logs still show suspicious outbound traffic coming from a normal looking system process.",
  "Memory analysis finds malicious code running entirely inside RAM, never saved to the hard drive at all.",
  "It's using a legitimate built in scripting tool that's normally used for routine system administration.",
  "By living entirely in memory and abusing a trusted native tool, it avoided every file based detection method in place."
], explainer: "Never writes a traditional file to disk, instead running directly in memory and abusing legitimate system tools, which makes it much harder for standard antivirus to catch." },

{ answer: "Phishing", clues: [
  "An employee in finance gets an unexpected email asking her to verify a vendor payment.",
  "It looks like it's from the CFO, but the reply address uses a domain spelled almost right.",
  "There's a link to a login page that looks identical to the company's real portal.",
  "She enters her credentials, and minutes later that account is sending the same email to forty coworkers.",
  "No malware was ever involved, the whole thing worked because she trusted the message and handed over her password."
], explainer: "Impersonates a trusted source to trick someone into handing over credentials or clicking something harmful. It relies entirely on social trust rather than any technical exploit." },

{ answer: "Smishing", clues: [
  "A guy gets a text claiming his package couldn't be delivered and needs an address update.",
  "He doesn't remember ordering anything that would be arriving this week.",
  "The link in the text leads to a page asking for his card number to cover a tiny redelivery fee.",
  "The web address is close to a real delivery company's name, just one letter off.",
  "It's the exact same trick as email phishing, just delivered straight to his phone over text message."
], explainer: "Phishing carried out over SMS instead of email, usually playing on urgency around deliveries, bank alerts, or account problems to get someone to click without thinking." },

{ answer: "Vishing", clues: [
  "An elderly woman gets a phone call from someone claiming to be her bank's fraud department.",
  "The caller already knows her name and the last four digits of her real card number.",
  "He says there's suspicious activity and asks her to confirm her full card number to verify her identity.",
  "The number on her caller ID even matches her bank's real customer service line.",
  "That caller ID was spoofed, and the whole call was a scripted attempt to get her card details over the phone."
], explainer: "Phishing done over a phone call instead of text or email, often using spoofed caller ID and real sounding details to seem legitimate enough to lower someone's guard." },

{ answer: "Business Email Compromise", clues: [
  "A company's accounts payable team gets an email that looks exactly like it's from the CEO.",
  "It asks for an urgent wire transfer to a new vendor account, citing a confidential acquisition.",
  "The tone, signature, and writing style all match the CEO's usual emails almost perfectly.",
  "The actual CEO is travelling and unreachable for the next few hours, which the email conveniently mentions.",
  "The money goes out before anyone double checks, straight into an account controlled by whoever sent that email."
], explainer: "Involves impersonating an executive or trusted partner convincingly enough to authorize a real financial transaction, and it's behind some of the largest dollar losses in cybercrime." },

{ answer: "Baiting", clues: [
  "A USB drive labeled with a tempting title turns up in the office parking lot.",
  "An employee picks it up out of curiosity and plugs it into his work laptop to see what's on it.",
  "A document opens, looking completely blank, while something runs silently in the background.",
  "IT finds a backdoor program installed on his machine within minutes of that USB being plugged in.",
  "The drive was deliberately left there, banking on someone's curiosity to do the rest of the work."
], explainer: "Relies on planting something tempting, like a labeled USB drive, somewhere a target is likely to find it, counting on curiosity to get them to plug it in themselves." },

{ answer: "Scareware", clues: [
  "A popup suddenly fills someone's entire screen claiming their computer is infected with sixteen viruses.",
  "It has flashing red warnings and a countdown timer urging immediate action.",
  "A phone number is provided to call tech support right away to fix it.",
  "Closing the browser doesn't make the warning disappear, it keeps reopening.",
  "The whole thing is a fake warning page designed purely to scare the person into paying for useless software."
], explainer: "Fakes alarming security warnings to panic someone into buying useless software or calling a fraudulent support number, exploiting fear rather than any real infection." },

{ answer: "Dumpster Diving", clues: [
  "A private investigator manages to get a target's bank statement, old prescriptions, and a voided check.",
  "None of it came from hacking anything online.",
  "It all came from a regular trash bag left outside the curb on collection day.",
  "Nothing in that bag had been shredded.",
  "Old fashioned digging through someone's actual garbage was enough to gather everything needed for identity theft."
], explainer: "Exactly what it sounds like, searching through physical trash for unshredded documents containing personal or financial information that was simply thrown away." },

{ answer: "Shoulder Surfing", clues: [
  "A man at a busy airport gate notices the stranger next to him is staring a little too long at his phone.",
  "He'd just unlocked his banking app to check a balance before boarding.",
  "Later that day, a small unauthorized transfer shows up on his account.",
  "He never clicked a link, downloaded anything, or gave his info to anyone.",
  "Someone simply watched him type his PIN over his shoulder in a crowded, distracted moment."
], explainer: "The lowest tech attack on the list, literally just watching someone enter a password or PIN in person, often in crowded public places where people let their guard down." },

{ answer: "Honeytrap", clues: [
  "A defense contractor's employee starts chatting with someone he met on a dating app.",
  "The conversation moves fast, and she seems unusually interested in details about his work projects.",
  "Over a few weeks, she gently steers conversations toward specifics he'd normally never discuss outside the company.",
  "A security review later finds the profile was created the same week he started a new sensitive assignment.",
  "The whole relationship was built specifically to extract confidential information through personal trust."
], explainer: "Uses a fabricated romantic or personal relationship to slowly extract sensitive information from a target, relying purely on emotional trust built over time." },

{ answer: "DDoS", clues: [
  "A popular gaming server goes completely unreachable for every player at 2am.",
  "The hosting dashboard shows incoming traffic spiking to roughly eight hundred times the normal volume.",
  "That traffic is coming from tens of thousands of different addresses all at once, none of them real players.",
  "Investigators trace a chunk of it back to a network of hijacked smart home devices.",
  "The goal was never to steal anything, just to flood the server with junk requests until it couldn't respond."
], explainer: "Overwhelms a target with traffic from many sources at once, usually a botnet, until it can no longer serve legitimate users. It's about availability, not theft." },

{ answer: "Man-in-the-Middle Attack", clues: [
  "A traveler connects to free airport WiFi and checks his bank balance.",
  "He doesn't notice the network name is almost identical to the airport's real one, just one character off.",
  "Someone nearby with cheap hardware had set that lookalike network up specifically to intercept traffic.",
  "Every page he visited got quietly routed through the attacker's laptop first.",
  "That attacker sat invisibly between him and the bank's website, reading and altering traffic without either side noticing."
], explainer: "Positions the attacker between two parties who think they're talking directly to each other, letting them read or alter traffic passing through. Encrypted connections are the main defense." },

{ answer: "DNS Spoofing", clues: [
  "An entire office suddenly gets redirected to a fake login page every time they try to reach their email provider.",
  "Typing the correct address still leads to the wrong, fraudulent looking page.",
  "It's not happening on phones using mobile data, only on the office network.",
  "IT finds the office router's DNS cache has been quietly fed false records.",
  "Those false records point the company's email address toward a server the attacker controls instead of the real one."
], explainer: "Injects fake address records into a DNS cache, silently redirecting people to a fraudulent destination even when they type the correct, legitimate web address." },

{ answer: "BGP Hijacking", clues: [
  "Internet traffic meant for a major bank in one country suddenly takes a strange, roundabout path through a different region.",
  "Users notice the bank's site loading much slower than usual for no clear reason.",
  "Network engineers trace the traffic and find it's being routed through an unfamiliar provider that has no business carrying it.",
  "That provider had announced, incorrectly or maliciously, that it was the best path to reach the bank's address range.",
  "Other networks across the internet believed that false announcement and rerouted real traffic through it."
], explainer: "Happens when a network falsely announces it's the best route to a destination, and other networks believe it, redirecting global internet traffic through somewhere it was never meant to go." },

{ answer: "SYN Flood", clues: [
  "A small business's web server starts refusing every new connection during what should be a quiet Tuesday afternoon.",
  "Server logs show thousands of connection attempts that never complete the normal handshake.",
  "Each one starts the process and then just stops, leaving the connection half open.",
  "All those half open connections pile up until the server has no resources left for real visitors.",
  "It's a deliberate flood of incomplete handshake requests designed purely to exhaust the server's connection capacity."
], explainer: "Abuses the normal way connections get established by starting thousands of handshakes and never finishing them, tying up server resources until nothing is left for genuine visitors." },

{ answer: "Evil Twin Wi-Fi", clues: [
  "A coffee shop regular notices two networks with the exact same name in the WiFi list today.",
  "She connects to the one with the stronger signal without thinking twice.",
  "Browsing feels normal, but oddly, a couple of sites ask her to log in again even though she normally stays logged in.",
  "The real coffee shop WiFi, it turns out, was the weaker signal sitting right next to a fake one.",
  "Someone nearby had set up a duplicate access point broadcasting the same name specifically to intercept anyone who connected."
], explainer: "Sets up a fake WiFi network broadcasting the same name as a legitimate one nearby, hoping people connect to the fake one without noticing the difference." },

{ answer: "SQL Injection", clues: [
  "A small online store's search bar starts returning results that make no sense, including customer names nobody searched for.",
  "A researcher notices something odd happens the instant an apostrophe gets typed into the search field.",
  "Submitting a specific crafted string into the login form lets anyone log in without a real password.",
  "The attacker manages to pull the entire customer table, emails, hashed passwords, full order history, straight out of the backend.",
  "The cause turns out to be raw user input getting inserted directly into a database query with no sanitizing at all."
], explainer: "Happens when untrusted input is inserted directly into a database query, letting an attacker manipulate the query itself instead of just searching normally." },

{ answer: "Cross-Site Scripting", clues: [
  "A user posts a comment on a forum, and afterward every visitor who views that page gets a strange popup.",
  "The comment itself contained a script tag instead of plain text.",
  "The forum's comment box never stripped out HTML or JavaScript before showing it to other users.",
  "That injected script quietly copies each visitor's session cookie and sends it off to the attacker.",
  "With those stolen cookies, the attacker can log in as any of those visitors without ever knowing a single password."
], explainer: "Lets an attacker inject scripts into pages viewed by other users, usually because input wasn't properly filtered before being displayed back on the page." },

{ answer: "CSRF", clues: [
  "A logged in user clicks a link in an unrelated email and, without realizing it, ends up changing his own account password.",
  "He never visited his account settings page on purpose that day.",
  "The malicious link was hosted on a totally different website he'd never seen before.",
  "That page contained a hidden form that submitted a password change request using his already logged in session.",
  "Because his browser was still authenticated to the real site, the request went through as if he'd done it himself."
], explainer: "Tricks a logged in user's browser into submitting a request they never intended, exploiting the fact that the browser is still authenticated even on a malicious page." },

{ answer: "Directory Traversal", clues: [
  "A researcher poking at a company's website notices the URL includes a file path as a parameter.",
  "Tweaking that path slightly with a series of dots and slashes returns a file that should never be public.",
  "The returned content turns out to be the server's own internal configuration file.",
  "The application never checked whether the requested path stayed inside the folder it was supposed to.",
  "That oversight let the researcher climb out of the intended folder entirely and read files elsewhere on the server."
], explainer: "Exploits a poorly checked file path input to let someone read files outside the folder an application was supposed to restrict them to." },

{ answer: "Command Injection", clues: [
  "A website that lets users check if a domain name is available suddenly behaves strangely for one tester.",
  "Typing a normal domain works fine, but adding certain extra characters to the input does something unexpected.",
  "One specific combination of characters causes the server to return a full directory listing of its own files.",
  "It turns out the input was being passed straight into a system command running on the actual server.",
  "That tester just managed to run arbitrary operating system commands on the server through nothing more than a form field."
], explainer: "Happens when user input gets passed directly into a system command without proper filtering, letting an attacker run their own commands on the underlying server." },

{ answer: "Clickjacking", clues: [
  "A user thinks she's clicking a harmless play video button on a page she landed on.",
  "What she actually clicked turns out to be an invisible button from a completely different website layered right on top.",
  "That hidden button belonged to a social media site and just liked and shared a post on her behalf.",
  "She never saw it happen, the real button was completely transparent, sitting exactly where the fake one appeared.",
  "The attacker built the page specifically to trick clicks into landing on hidden controls she never meant to interact with."
], explainer: "Tricks users into clicking something different than what they think they're clicking, usually by hiding a real button underneath a fake, visible one." },

{ answer: "Brute-Force Attack", clues: [
  "A company's login logs show over fifty thousand failed attempts overnight on one single account.",
  "Each attempt is happening every few milliseconds, far too fast for any human typing.",
  "The usernames being tried are mostly variations of admin and administrator.",
  "It's not random guessing, it's systematically working through a massive list of common passwords in order.",
  "Eventually, attempt number forty one thousand eight hundred and thirty two succeeds, the password was just a common word and a year."
], explainer: "Automates trying huge numbers of password combinations until one works. Lockouts, rate limiting, and multi factor authentication are the usual countermeasures." },

{ answer: "Credential Stuffing", clues: [
  "Hundreds of accounts on a streaming service get accessed from unfamiliar countries within the same hour.",
  "None of those affected customers reported any phishing emails or suspicious links beforehand.",
  "Every compromised password matches one the customer used on a totally different site, one that was breached two years ago.",
  "The attacker never guessed a single password, they just tried millions of already leaked username and password pairs.",
  "It only worked on accounts where people had reused a password from that old, unrelated breach."
], explainer: "Reuses leaked username and password combinations from one breach to try logging into accounts on completely unrelated sites, banking on people reusing passwords." },

{ answer: "Password Spraying", clues: [
  "A company's security team notices a single common password being tried against thousands of different employee accounts.",
  "It's not the same account getting hammered repeatedly, it's one password tested across the entire directory.",
  "Each individual account only sees one or two attempts, never enough to trigger a lockout.",
  "The attacker is deliberately spreading attempts thin across many accounts to stay under the radar.",
  "Eventually one employee, somewhere in a company of thousands, happens to be using that exact common password."
], explainer: "Instead of hammering one account with many passwords, this tries one common password against many accounts at once, staying quiet enough to avoid triggering lockout alarms." },

{ answer: "MFA Fatigue", clues: [
  "An employee's phone buzzes with a login approval request at 1am, then again, then again, dozens of times.",
  "He didn't try to log into anything himself.",
  "Half asleep and annoyed by the constant notifications, he finally taps approve just to make it stop.",
  "That single tap was all an attacker needed, who'd already had his correct password from an earlier breach.",
  "They simply spammed approval requests until exhaustion did the work that guessing a second factor never could."
], explainer: "Bombards a user with repeated login approval prompts, betting that sheer annoyance or confusion eventually leads someone to approve one just to make the notifications stop." },

{ answer: "Dictionary Attack", clues: [
  "A security audit on an old internal system finds an account compromised within minutes of testing.",
  "The password that worked wasn't random at all, it was a single common English word.",
  "The attack tool wasn't trying every possible character combination, it was running through a curated list of real words.",
  "That list included things like common passwords and the company's own name with a number on the end.",
  "It cracked the account almost instantly because the password was sitting right there in the most basic word list available."
], explainer: "Rather than trying every possible combination, this runs through a curated list of likely passwords, common words, names, and known weak choices, often far faster than pure brute force." },

{ answer: "Juice Jacking", clues: [
  "A traveler's phone is nearly dead at the airport, so he plugs into a public charging kiosk.",
  "The phone charges fine, nothing seems wrong in the moment.",
  "Days later, strange apps he never installed start appearing on the device.",
  "A technician finds the charging port had been modified to also act as a data connection.",
  "That modified kiosk had been quietly installing malware onto any phone that connected through that single cable."
], explainer: "Compromises public USB charging stations so the same cable that charges a phone also secretly transfers data or installs malware onto it." },

{ answer: "BadUSB", clues: [
  "An IT department finds an employee plugged in a free USB drive from a trade show.",
  "No files were ever opened, he just plugged it in to see what storage it had.",
  "Within seconds, dozens of unauthorized commands ran on his machine, typed faster than any human possibly could.",
  "It turns out the device wasn't acting as storage at all, it was emulating a keyboard.",
  "Its firmware had been reprogrammed to type out malicious commands the instant it was plugged in, with no files needed."
], explainer: "Reprograms a USB device's firmware to impersonate a keyboard instead of storage, letting it type out malicious commands the moment it's connected, with no file ever needing to be opened." },

{ answer: "Hardware Keylogger", clues: [
  "A small office's bookkeeper notices her banking password stopped working out of nowhere.",
  "Her computer has no unusual software installed at all, antivirus comes back completely clean.",
  "A coworker happens to glance behind her desk and spots a tiny unfamiliar device plugged in between her keyboard and the computer.",
  "It's been sitting there for weeks, quietly recording everything she's typed.",
  "That inline device intercepts every keystroke at the hardware level, completely invisible to any software based security tool."
], explainer: "A physical device inserted between a keyboard and a computer, capturing keystrokes at the hardware level where no antivirus or software scan would ever detect it." },

{ answer: "Rowhammer Attack", clues: [
  "Researchers studying a particular brand of memory chip find they can flip data in rows they never directly accessed.",
  "They're not hacking software at all, just repeatedly hitting the same row of memory cells over and over.",
  "That rapid repeated access causes electrical interference that leaks into the rows physically next to it.",
  "Eventually bits in those neighboring rows flip from a 0 to a 1 or back, with no software exploit involved.",
  "With careful targeting, those flipped bits can be used to corrupt data an attacker was never supposed to have access to."
], explainer: "Exploits a physical quirk in memory chips, where rapidly accessing one row of memory enough times can cause bits in neighboring rows to flip purely from electrical interference." },

{ answer: "Supply Chain Attack", clues: [
  "Thousands of companies install a routine update for a tool they've trusted for years.",
  "The update was digitally signed and came straight from the vendor's own official servers.",
  "No antivirus flags anything, because the file genuinely is the real, signed update.",
  "Investigators later find attackers had quietly compromised the vendor's build server months earlier, slipping malicious code in before it was signed.",
  "Every customer who simply updated like normal got infected, without clicking a single suspicious link."
], explainer: "Compromises a trusted vendor upstream, so the malicious payload rides in through a channel the victim already trusts completely, like a routine software update." },

{ answer: "Zip Bomb", clues: [
  "An email security gateway crashes hard the moment it tries to scan one particular attachment.",
  "The attachment itself is a tiny zip file, barely a few kilobytes in size.",
  "When the scanner tries to actually unpack it to check inside, it never finishes.",
  "That tiny file, once fully extracted, would expand to an absurd, multi terabyte size.",
  "It was deliberately built with nested layers of compression specifically to overwhelm anything that tries to open it."
], explainer: "A tiny, deliberately crafted compressed file that expands into an enormous size when unpacked, designed purely to crash or overwhelm scanning software that tries to open it." },

{ answer: "Fork Bomb", clues: [
  "A university's shared lab computer becomes completely unresponsive seconds after a student runs a one line command.",
  "It wasn't a virus downloaded from anywhere, it was typed directly into a terminal window.",
  "That single tiny command made a copy of itself, which then each made another copy, endlessly.",
  "Within seconds the system had thousands of these duplicate processes spawning every fraction of a second.",
  "There were simply no resources left for anything else once that exponential chain of self duplicating processes took over."
], explainer: "A tiny script or command that spawns copies of itself endlessly, exhausting all available system resources in seconds without ever needing to download anything malicious." },

{ answer: "Bricking", clues: [
  "A smart home owner pushes a firmware update to her thermostat overnight.",
  "The update gets interrupted halfway through when the WiFi drops out for a few seconds.",
  "The thermostat never turns back on, not even the screen lights up.",
  "A support technician confirms there's no way to recover it, the low level instructions that let it boot at all got overwritten incompletely.",
  "With nothing left to boot from, the device is now permanently, completely dead."
], explainer: "When a device's core firmware gets corrupted badly enough, often from an interrupted update, that it can no longer boot at all, leaving it as useless as an actual brick." },

{ answer: "Unsecured S3 Bucket", clues: [
  "A security researcher stumbles onto a cloud storage folder belonging to a major retailer with zero login required.",
  "He didn't hack anything, the address was just publicly guessable and openly accessible.",
  "Inside are thousands of customer order receipts sitting in plain, unencrypted files.",
  "The access permissions on that storage folder had simply been left set to public instead of private.",
  "Anyone who found that address could read, and in some cases download, every file inside without ever needing a password."
], explainer: "Happens when cloud storage gets left open to the public by mistake, usually a simple misconfigured access permission rather than any actual hack." },

{ answer: "Container Escape", clues: [
  "A hosting company runs hundreds of customer applications, each isolated in its own separate container on shared servers.",
  "One customer's container starts behaving oddly, making requests it has no business making.",
  "Investigation shows that container somehow gained access to files belonging to a completely different customer.",
  "A flaw in how the container was isolated let a process inside it reach beyond its own boundary.",
  "That process broke out of its sandbox entirely and touched the underlying host system shared by everyone else."
], explainer: "Breaks out of an isolated software container to reach the underlying host system, which is supposed to be impossible by design and is treated as a serious flaw whenever it's found." },

{ answer: "API Key Exposure", clues: [
  "A startup's cloud bill suddenly jumps from a few hundred dollars to tens of thousands overnight.",
  "Nobody on the team authorized any new spending or scaled up any services.",
  "Usage logs show massive activity coming from servers nobody on the team recognizes, in a country none of them are in.",
  "A quick search turns up the company's cloud credentials sitting in a public code repository from months ago.",
  "A developer had accidentally committed those raw access keys into the codebase, and someone scraping public repositories found and used them."
], explainer: "Happens when cloud access credentials get accidentally posted somewhere public, usually committed to a code repository by mistake, letting anyone who finds them rack up usage on someone else's account." },

{ answer: "Prompt Injection", clues: [
  "A company's customer service chatbot starts giving out information it was specifically told never to share.",
  "It wasn't hacked in any traditional sense, no code was changed.",
  "A customer had simply typed a carefully worded message trying to get the bot to ignore its instructions.",
  "That message included text designed to look like a new, higher priority instruction from the system itself.",
  "The bot followed it as if it were a legitimate command, overriding the rules it was originally given."
], explainer: "Manipulates an AI system by crafting input that tricks it into ignoring its original instructions, treating the malicious text as if it were a legitimate new command." },

{ answer: "Deepfake Impersonation", clues: [
  "A finance employee gets a video call from someone who looks and sounds exactly like the company's CEO.",
  "The voice, mannerisms, even small verbal habits all seem completely authentic.",
  "The CEO on screen urgently requests a large wire transfer for a confidential deal, apologizing for the rushed video quality.",
  "The real CEO, it turns out, was on a flight with no signal during that entire window.",
  "The video and voice had been synthetically generated using publicly available footage to convincingly imitate him in real time."
], explainer: "Uses AI generated audio or video to convincingly impersonate a real person, sometimes well enough to fool people who know that person's voice and mannerisms." },

{ answer: "AI Model Poisoning", clues: [
  "A company's spam filter, once reliable, slowly starts letting more and more obvious spam through.",
  "It's not a bug in the code, the filter is technically working exactly as trained.",
  "A review of the training data finds a batch of cleverly mislabeled spam messages tagged as safe.",
  "That tainted batch had been intentionally submitted in small amounts over several months.",
  "Over time, the model learned the wrong lesson from that injected bad data, shifting what it considers normal."
], explainer: "Contaminates the data a machine learning model is trained on, deliberately skewing what it learns so it behaves in a way the attacker wants once deployed." },

{ answer: "Zero-Day Exploit", clues: [
  "A widely used piece of software starts behaving strangely on machines that are completely up to date.",
  "Security teams can't find any existing patch, advisory, or even a prior report describing this behavior.",
  "The vendor confirms they had no idea the flaw existed until attackers were already actively using it.",
  "By the time a patch finally comes out, the flaw had already been exploited in the wild for weeks.",
  "It was a vulnerability nobody, not even the software's own developers, knew about before attackers found and weaponized it first."
], explainer: "Targets a vulnerability that's unknown to the vendor at the time of the attack, meaning no patch exists yet and defenders are caught completely off guard." },

{ answer: "Insider Threat", clues: [
  "A company notices a folder of confidential product designs accessed at 11pm on a Sunday.",
  "The access came from a laptop on the corporate VPN, logged in with a current employee's valid credentials.",
  "That employee had handed in her resignation letter three days earlier.",
  "Security footage shows nothing suspicious, the access happened entirely from home using completely normal, authorized permissions.",
  "No hacking was involved at all, a trusted person simply used access she already legitimately had to take data she wasn't supposed to keep."
], explainer: "Comes from someone with legitimate access who misuses it, intentionally or carelessly. It's hard to catch because the activity often looks completely authorized." },

{ answer: "Advanced Persistent Threat", clues: [
  "A defense contractor discovers unusual but very quiet network activity that's been going on, undetected, for over a year.",
  "Nothing about it looked like typical smash and grab malware, no ransom notes, no obvious damage.",
  "Whoever was inside moved slowly and carefully, careful never to trigger any alarms.",
  "They'd been steadily collecting internal documents and credentials in small, hard to notice amounts the entire time.",
  "The patience and resources behind the operation point toward a well funded, long term espionage campaign rather than an opportunistic attacker."
], explainer: "Describes a sophisticated, well resourced attacker who gets into a network and stays hidden for an extended period, slowly gathering information rather than causing immediate, obvious damage." }

];

const CASES_HARD = [

{ answer: "WannaCry", clues: [
  "In May 2017, hospitals across an entire country start losing access to patient records on the same day, seemingly out of nowhere.",
  "It's not isolated, within hours similar reports come in from over a hundred fifty countries.",
  "The malware spreads through a Windows networking flaw that had a patch released two months earlier, but huge numbers of machines never installed it.",
  "A young security researcher poking through the code almost by accident registers a strange unregistered domain name buried inside it, which turns out to stop the spread entirely.",
  "The exploit it rode in on had been developed by a US intelligence agency and leaked publicly by a hacking group just a month before any of this started."
], explainer: "WannaCry was a ransomware worm that spread rapidly across the world in May 2017 using a leaked NSA exploit called EternalBlue, hitting the UK's National Health Service especially hard before a researcher's discovery of an unregistered kill switch domain helped slow it down." },

{ answer: "NotPetya", clues: [
  "A few weeks after a much bigger ransomware outbreak made headlines, a similar looking attack starts spreading through companies in Ukraine.",
  "It demands a Bitcoin ransom just like the more famous one everyone's already talking about that month.",
  "Security researchers digging into the code notice something odd, there's no actual way to recover the files even if someone pays.",
  "It traces back to a single update from a small Ukrainian accounting software company that almost every business in the country uses for filing taxes.",
  "Global shipping giant Maersk and pharmaceutical company Merck both end up losing hundreds of millions of dollars after their systems get wiped out entirely."
], explainer: "NotPetya looked like ransomware but was actually a wiper with no real way to pay for recovery, spread through a compromised update to Ukrainian tax software in 2017 and caused billions of dollars in damage globally, with Maersk and Merck among the hardest hit." },

{ answer: "Stuxnet", clues: [
  "Engineers at an industrial facility notice machinery behaving strangely, spinning faster than it should, while every gauge and readout insists everything is completely normal.",
  "The facility isn't connected to the public internet at all, it's deliberately isolated.",
  "Investigators eventually trace the infection back to a USB drive, the only way anything ever got in.",
  "The malware specifically targets one brand of industrial control software, used to manage a particular kind of spinning equipment.",
  "That equipment turns out to be uranium enrichment centrifuges, and the facility is in Iran."
], explainer: "Stuxnet was a highly sophisticated worm believed to have been developed by US and Israeli intelligence to sabotage Iran's nuclear program, secretly damaging centrifuges while feeding operators normal looking readings, spreading through an air gapped facility via infected USB drives." },

{ answer: "Heartbleed", clues: [
  "Security researchers discover a flaw sitting quietly inside one of the most widely used pieces of encryption software on the internet.",
  "It's been there for roughly two years before anyone notices.",
  "The bug lives in a small feature meant to keep a connection alive, nicknamed the heartbeat.",
  "Exploiting it lets an attacker repeatedly ask a server for a little bit more memory than it should hand over, with no trace left behind.",
  "That leaked memory can include private encryption keys and passwords, from a library used by a huge share of the world's websites."
], explainer: "Heartbleed was a vulnerability in OpenSSL's heartbeat extension that let attackers read chunks of a server's memory, potentially exposing private keys and passwords, and it went undetected for about two years in software securing a massive portion of the internet." },

{ answer: "Log4Shell", clues: [
  "A flaw is discovered in a tiny piece of software that barely anyone outside of engineering has ever heard of.",
  "It's not a standalone program, it's a logging library quietly buried inside an enormous number of other applications and services.",
  "Just getting that library to log a single specially crafted text string is enough to let an attacker run their own code on the server.",
  "Because the library is bundled inside so many other products, almost nobody knows for certain everywhere it's installed.",
  "It's part of a widely used Apache logging project, used across an enormous share of enterprise Java applications worldwide."
], explainer: "Log4Shell was a critical flaw in the widely used Apache Log4j logging library, discovered in December 2021, that let attackers achieve remote code execution just by getting a vulnerable application to log a malicious string." },

{ answer: "SolarWinds Breach", clues: [
  "A cybersecurity firm investigating a separate incident at one of its own employees notices something doesn't add up with how a multi factor login behaved.",
  "That small thread of investigation leads to the discovery of a much, much bigger problem affecting a popular IT management product.",
  "The malicious code wasn't snuck in after the fact, it was hidden inside an official, digitally signed software update.",
  "That update went out to roughly eighteen thousand customers, though only a smaller number were actually targeted further.",
  "Several agencies of the US federal government turn out to have been quietly compromised through that one trusted update for months."
], explainer: "The SolarWinds breach involved attackers, attributed to Russian intelligence, inserting malicious code into a signed update for SolarWinds' Orion network management software, giving them a backdoor into thousands of organizations including multiple US government agencies for months before discovery in late 2020." },

{ answer: "Mirai Botnet", clues: [
  "One Friday morning, huge chunks of the internet's most popular websites become unreachable for users across the US East Coast.",
  "Twitter, Netflix, Reddit, and Spotify are all affected, and they're not even the actual target.",
  "The real target is a company that handles domain name lookups for a huge portion of the internet.",
  "That company gets hit with an enormous flood of traffic coming from an army of hijacked devices.",
  "Those devices turn out to be ordinary security cameras, routers, and DVRs, all infected with malware that scans for default factory passwords."
], explainer: "This botnet infected huge numbers of insecure internet connected devices using default credentials, and in October 2016 used them to launch a massive DDoS attack against DNS provider Dyn, taking down major sites across the US for hours." },

{ answer: "Colonial Pipeline Attack", clues: [
  "A major fuel pipeline operator on the US East Coast suddenly shuts down all of its operations on its own, as a precaution.",
  "It's not a physical failure, the pipeline itself is fine, it's the company's billing and business systems that triggered the shutdown.",
  "Within days, gas stations across several states start running dry as panic buying kicks in.",
  "Investigators trace the initial access back to a single old VPN account that didn't have two factor authentication turned on.",
  "The company ends up paying close to four and a half million dollars in bitcoin to a ransomware gang to get systems back online."
], explainer: "In May 2021, the Colonial Pipeline Company shut down the largest fuel pipeline on the US East Coast after a ransomware attack by the DarkSide gang, who got in through a compromised VPN password, triggering fuel shortages and panic buying across several states." },

{ answer: "Kaseya VSA Attack", clues: [
  "Over a long holiday weekend, when staffing at most companies is thin, dozens of IT service providers all start reporting the same nightmare at once.",
  "It's not their own systems initially, it's the remote management software they use to maintain hundreds of their clients' computers.",
  "A Swedish grocery chain ends up closing almost all of its stores for nearly a week because of it.",
  "The ransomware gang behind it demands an eye watering seventy million dollars for a universal decryption key.",
  "The software they exploited a vulnerability in is built specifically for managed service providers to remotely monitor and manage their customers' machines."
], explainer: "This attack in July 2021 saw the REvil ransomware gang exploit a vulnerability in remote management software used by IT providers, letting them push ransomware downstream to potentially over a thousand businesses through trusted management tools." },

{ answer: "Equifax Breach", clues: [
  "One of the three major US credit reporting agencies discovers months after the fact that something has gone very wrong.",
  "The intrusion had been going on for over two months before anyone noticed.",
  "A monitoring tool that should have flagged the suspicious activity sooner had an expired security certificate, so it wasn't actually inspecting traffic.",
  "The entry point was a known flaw in an open source web framework that had a patch available months before the breach started.",
  "Social security numbers, birth dates, and addresses for nearly a hundred fifty million Americans end up exposed."
], explainer: "Equifax suffered a breach in 2017 after attackers exploited an unpatched Apache Struts vulnerability, going undetected for over two months partly because an expired certificate had disabled the company's own traffic monitoring, exposing data on roughly 147 million people." },

{ answer: "Capital One Breach", clues: [
  "A bank discovers a huge trove of its customer data sitting in a public code sharing repository, posted by someone bragging about it online.",
  "It wasn't stolen through malware or phishing emails.",
  "The attacker, it turns out, used to work for the cloud provider the bank's systems run on.",
  "She found a way to trick a misconfigured firewall into making requests on her behalf, reaching internal systems it should never have had access to.",
  "That trick let her pull temporary cloud credentials that gave access to a huge number of customer data files stored in the bank's cloud storage."
], explainer: "Capital One suffered a breach in 2019 after a former AWS employee exploited a server side request forgery flaw in a misconfigured firewall to obtain cloud credentials and access roughly 106 million customers' data, later posting some of it publicly online." },

{ answer: "MOVEit Breach", clues: [
  "A wave of companies across dozens of countries all start reporting breaches within the same few weeks, with no obvious connection between them at first.",
  "It turns out they all use the same piece of file transfer software to move sensitive data securely.",
  "A ransomware gang had found and used a previously unknown flaw in that software before a patch was even available.",
  "Rather than encrypting anything, this time the group skipped straight to just stealing the data and threatening to leak it.",
  "Thousands of organizations worldwide, from airlines to universities to government agencies, end up affected through this one piece of widely used managed file transfer software."
], explainer: "This breach in 2023 involved the Cl0p ransomware gang exploiting a zero day SQL injection flaw in Progress Software's MOVEit file transfer tool, stealing data from thousands of organizations worldwide without even needing to encrypt anything." },

{ answer: "ILOVEYOU Worm", clues: [
  "An email with an irresistible subject line starts spreading across offices worldwide at the turn of the millennium.",
  "The attachment isn't a document at all, it's disguised to look like one using a double file extension trick.",
  "Opening it overwrites image and media files on the computer and immediately emails itself to everyone in the victim's address book.",
  "It started in the Philippines and spread to tens of millions of computers within about a day.",
  "Estimated damages from the cleanup and lost productivity run into the billions of dollars worldwide."
], explainer: "This worm spread in May 2000 through an email attachment disguised as a love letter, overwriting files and mass emailing itself to a victim's entire contact list, causing billions of dollars in damage in one of the fastest spreading outbreaks of its era." },

{ answer: "Conficker Worm", clues: [
  "A worm starts spreading through corporate and government networks worldwide, exploiting a Windows flaw that had already been patched weeks earlier.",
  "It's smart enough to disable security software and block access to antivirus websites on infected machines.",
  "Security researchers around the world form an unprecedented coalition specifically to fight this one piece of malware.",
  "At its peak, it's believed to control somewhere between nine and fifteen million infected computers.",
  "Despite the scale of the response, who actually built and controlled the thing was never definitively identified."
], explainer: "This worm spread rapidly starting in late 2008 by exploiting an unpatched Windows vulnerability, eventually infecting millions of machines worldwide and prompting an unusual industry wide coalition to fight it, though its creators were never conclusively identified." },

{ answer: "Sony Pictures Hack", clues: [
  "A movie studio's entire internal network grinds to a halt one morning, with skull imagery and a threatening message plastered across employee screens.",
  "Thousands of internal documents, unreleased films, and embarrassing executive emails start leaking online in the days that follow.",
  "The attack coincides almost exactly with the planned release of a comedy film mocking a specific world leader.",
  "US investigators eventually attribute the attack to a state sponsored hacking group.",
  "The country accused of backing the attack is North Korea, reportedly in retaliation for the film's plot involving an assassination of its leader."
], explainer: "This 2014 hack involved a wiper attack and massive data leak attributed by the US government to North Korean state hackers, timed around the studio's release of a comedy depicting the assassination of North Korea's leader." },

{ answer: "Bangladesh Bank Heist", clues: [
  "A central bank's payment requests start flowing out through the global interbank messaging system late on a weekend, when almost nobody is watching.",
  "The requests look completely legitimate, using stolen but valid credentials within the bank's own systems.",
  "Attackers attempt to transfer roughly a billion dollars out through dozens of separate requests.",
  "A simple typo in one of the destination names is what finally tips off a routine bank in another country and gets most of the transfers frozen.",
  "A chunk of the money that did get through ends up traced to casinos in the Philippines, vanishing into the gambling system before it can be recovered."
], explainer: "In 2016, hackers linked to North Korea's Lazarus Group used stolen credentials to send fraudulent transfer requests through Bangladesh Bank's SWIFT system, attempting to steal roughly a billion dollars, most of which was blocked, though around 81 million dollars got through and was laundered via casinos." },

{ answer: "Target Breach", clues: [
  "During the peak of the holiday shopping season, a major retail chain's payment systems get quietly compromised across nearly two thousand stores.",
  "Customers have no idea anything is wrong while swiping their cards at checkout.",
  "The attackers' way in wasn't the retailer's own network defenses, it was stolen login credentials from a small heating and air conditioning contractor.",
  "From there, malware gets installed directly on the point of sale terminals themselves, capturing card data as it's swiped.",
  "Around forty million credit and debit card numbers end up stolen in the weeks before Christmas."
], explainer: "This breach in late 2013 began with stolen credentials from a third party HVAC vendor, which attackers used to plant malware on point of sale systems across nearly 2,000 stores, capturing roughly 40 million card numbers during the holiday shopping rush." },

{ answer: "Ashley Madison Breach", clues: [
  "A hacking group calling itself by a single ominous name announces it has broken into a dating site with a very specific, scandalous purpose.",
  "They demand the entire site be shut down permanently, or they'll release everything they have.",
  "The site doesn't comply, and weeks later, tens of millions of user records get dumped publicly online.",
  "The site's whole business model was built around discretion, marketed specifically toward people looking to have affairs.",
  "The fallout includes public outings, extortion attempts against individual users, and reports of the leak contributing to multiple suicides."
], explainer: "In 2015, a hacking group calling itself the Impact Team breached this dating site marketed toward married people seeking affairs, leaking tens of millions of user records after the company refused to shut the site down." },

{ answer: "Yahoo Breach", clues: [
  "A tech company discloses a years old breach that, at first, seems large but contained.",
  "Then, in a follow up disclosure, the actual number of affected accounts turns out to be far larger than first reported.",
  "Eventually, the total gets revised upward one final time to cover essentially every single account the company ever had.",
  "State sponsored hackers are believed to be behind at least one of the underlying intrusions.",
  "The final disclosed total lands at over three billion user accounts, making it one of the largest breaches ever recorded."
], explainer: "This company disclosed in 2016 that breaches dating back to 2013 and 2014 had compromised hundreds of millions of accounts, before later revising the total upward to more than three billion accounts, making it one of the largest data breaches in history." },

{ answer: "Marriott Breach", clues: [
  "A major hotel chain discovers unauthorized access to a guest reservation database that's apparently been going on for years.",
  "The compromised system actually belonged to a hotel brand the chain had acquired a few years earlier.",
  "Investigators determine the intruders had been quietly inside since long before the acquisition even closed.",
  "Stolen data includes passport numbers and travel details for roughly half a billion guests.",
  "US officials later attribute the years long intrusion to a state sponsored intelligence gathering operation, not typical financial cybercrime."
], explainer: "This chain disclosed in 2018 that the reservation database of its recently acquired Starwood hotel brands had been compromised for years, exposing data including passport numbers for roughly 500 million guests, with US officials later linking it to Chinese state intelligence activity." },

{ answer: "RSA Breach", clues: [
  "A security company best known for the little keyfob tokens millions of employees use to log into corporate networks discovers it's been breached itself.",
  "The attack starts with a spear phishing email sent to just a handful of employees, with an infected spreadsheet attached.",
  "That attachment exploits a previously unknown flaw in a common piece of software just by being opened.",
  "What the attackers steal isn't customer data exactly, it's the secret seed values behind the company's own authentication tokens.",
  "Months later, those stolen seed values are believed to have helped attackers target a major US defense contractor."
], explainer: "This company disclosed in 2011 that attackers had used a spear phishing email with a malicious attachment to breach its network and steal data related to its SecurID authentication tokens, later linked to a subsequent attempted intrusion at defense contractor Lockheed Martin." },

{ answer: "Ukraine Power Grid Attack", clues: [
  "Right before the holidays, several regional power companies in one country suddenly go dark, leaving hundreds of thousands of customers without electricity.",
  "It isn't a storm or equipment failure, operators watch their own control screens get taken over remotely in real time.",
  "The attackers had been quietly inside the network for months, carefully learning how the control systems worked before doing anything.",
  "They didn't even need especially exotic tools, mostly relying on stolen credentials and remote access software already present on the network.",
  "It's widely considered the first confirmed cyberattack to directly cause a power outage, attributed to a Russian linked hacking group."
], explainer: "In December 2015, hackers believed to be linked to Russia remotely cut power to roughly 225,000 customers in Ukraine after months of reconnaissance inside the utility's network, marking the first confirmed cyberattack to directly cause a blackout." },

{ answer: "Shamoon (Saudi Aramco Attack)", clues: [
  "Tens of thousands of workstations at a massive state owned oil company suddenly go completely dead within the same few hours.",
  "It's not a ransom note that greets employees rebooting their machines, it's an image of a burning flag.",
  "Recovery isn't about decryption at all, the data on those machines is simply gone for good.",
  "Production itself isn't directly affected, since the company's actual oil infrastructure runs on separate systems, but day to day office operations are crippled for weeks.",
  "The company ends up having to buy tens of thousands of new hard drives just to get its workforce back on functioning computers."
], explainer: "In 2012, wiper malware destroyed data on roughly 30,000 workstations at Saudi Arabian oil company Aramco, leaving an image of a burning flag on screens and forcing the company to replace huge numbers of hard drives to recover." },

{ answer: "Twitter Bitcoin Hack", clues: [
  "Within the same hour, a string of extremely high profile accounts, including a former US president and several billionaires, all post the exact same kind of message.",
  "Each one promises to double any bitcoin sent to a particular wallet address.",
  "It's not that each of these celebrities' personal accounts got individually hacked.",
  "Attackers had gained access to an internal tool that support staff use to manage and reset any account on the platform.",
  "They got that access by convincing employees over the phone, posing as IT staff, to hand over their own internal login credentials."
], explainer: "In July 2020, attackers used phone based social engineering to trick employees at this company into giving up credentials for an internal admin tool, then used that access to hijack dozens of high profile accounts and post a bitcoin scam." },

{ answer: "LinkedIn Breach", clues: [
  "A professional networking site discloses a breach that initially seems modest in scope.",
  "Years later, a much larger trove of data from the same incident surfaces for sale, far bigger than originally disclosed.",
  "The passwords involved turn out to have been stored using an outdated hashing method with no extra random data mixed in.",
  "That weak storage method makes the stolen password hashes far easier to crack than they should have been.",
  "The eventual total affects well over a hundred million user accounts from the original incident alone."
], explainer: "This site disclosed a breach in 2012 that initially seemed to affect a modest number of accounts, but years later it became clear over 100 million accounts had been compromised, with weakly hashed passwords that were relatively easy to crack." },

{ answer: "Heartland Payment Systems Breach", clues: [
  "A payment processor that handles transactions for over a hundred thousand businesses discovers something has been quietly watching its network traffic.",
  "It's not card data sitting in a database that gets stolen, it's card data being captured the instant it travels across the internal network.",
  "A piece of sniffing malware had been planted specifically to intercept that data mid transmission.",
  "The initial way in was a SQL injection flaw, the same general technique used in plenty of other breaches around that time.",
  "Roughly a hundred thirty million card numbers end up exposed, making it one of the largest payment breaches of its era."
], explainer: "This payment processor was breached in 2008 by attackers who used a SQL injection flaw to plant malware that sniffed card data as it moved across the company's internal network, exposing around 130 million card numbers." },

{ answer: "Anthem Breach", clues: [
  "One of the largest health insurers in the country discovers attackers have been quietly inside its systems for weeks.",
  "It started, as so many of these do, with a convincing email sent to a handful of employees.",
  "From a single compromised login, the intruders worked their way deeper into systems holding decades of customer records.",
  "Nothing about the stolen data was encrypted at rest, since it didn't need to be under the regulations at the time.",
  "Names, birth dates, social security numbers, and addresses for nearly eighty million people end up exposed, and investigators later link the operation to Chinese state sponsored hackers."
], explainer: "This health insurer disclosed in 2015 that attackers, beginning with a spear phishing email, had gained access to systems holding records for nearly 80 million people, in a breach later attributed to a Chinese state sponsored hacking group." },

{ answer: "OPM Breach", clues: [
  "A federal agency responsible for managing personnel records discovers attackers have been inside its network for the better part of a year.",
  "This isn't a typical financial cybercrime target, the agency doesn't process payments or hold credit card numbers.",
  "What it does hold are deeply detailed background investigation files used for security clearances.",
  "That includes fingerprints, family history, financial details, and information on foreign contacts for millions of federal employees and contractors.",
  "US officials later attribute the long running intrusion to Chinese state sponsored hackers, viewing it as an intelligence gathering operation rather than ordinary theft."
], explainer: "The US Office of Personnel Management disclosed in 2015 that attackers, attributed to Chinese state sponsored hackers, had spent months inside its network stealing extraordinarily sensitive security clearance background investigation files on millions of federal employees and contractors." },

{ answer: "Xbox 360 Red Ring of Death", clues: [
  "Owners of a popular game console start noticing three of the four lights around the power button glowing red instead of green.",
  "It happens during normal use, sometimes mid game, with no warning beforehand.",
  "Once it happens, the console simply won't function at all, no picture, no sound, nothing.",
  "Technicians who open up failed units consistently find the same problem, a connection between the main chip and the circuit board has physically separated.",
  "The root cause comes down to inadequate cooling combined with a solder process that couldn't handle the heat cycling from normal use, and the manufacturer eventually sets aside well over a billion dollars to cover repairs."
], explainer: "This console's infamous failure, marked by three flashing red lights, was caused by inadequate cooling and solder joints that cracked under repeated heat cycling, becoming widespread enough that Microsoft extended warranties and took a massive financial charge to cover repairs." },

{ answer: "PS3 Yellow Light of Death", clues: [
  "A different game console from the same console generation develops its own version of a similar hardware nightmare.",
  "Instead of the usual steady green glow, the power light starts blinking yellow, then red, before shutting off entirely.",
  "No picture reaches the TV, and the console refuses to boot at all afterward.",
  "Like its main rival's well known failure, this one also traces back to a cracked connection between a key chip and the motherboard.",
  "It's specifically the graphics chip's connection that tends to fail here, brought on by the same kind of repeated heating and cooling during normal use."
], explainer: "This was a hardware failure affecting some PlayStation 3 consoles where solder joints connecting the graphics chip to the motherboard cracked from repeated heat cycling, leaving the console unable to boot and flashing a yellow light instead of its usual green." },

{ answer: "Galaxy Note 7 Battery Fires", clues: [
  "Reports start trickling in of a popular new smartphone suddenly catching fire or swelling up while charging.",
  "It's not a one off, dozens of similar incidents get reported within just a few weeks of launch.",
  "The manufacturer issues a full recall and replaces affected units with what it insists are safe ones.",
  "Then the replacement units start catching fire too, including one on board a passenger flight.",
  "Airlines and aviation regulators around the world end up banning the device from flights entirely, and the manufacturer discontinues the phone for good."
], explainer: "This phone had a battery design flaw where too little space inside a tightly packed casing led to punctured separators and short circuits, causing fires and swelling that triggered two separate recalls, a flight ban, and the phone's permanent discontinuation." },

{ answer: "iPhone 4 Antennagate", clues: [
  "Reviewers and early buyers of a sleek new smartphone notice something odd, calls keep dropping in a way that seems tied to exactly how they're holding it.",
  "Specifically, gripping the bottom left edge in a certain way seems to make it worse.",
  "The phone's antenna design is unusual, a metal band running around the entire outer edge doubles as the actual antenna.",
  "Touching the gap between two segments of that band with bare skin can bridge them, attenuating the signal.",
  "The company eventually holds a press conference, offers free cases to fix the issue, and even gives refunds to unhappy customers."
], explainer: "This phone's external antenna design, where a metal band around the edge doubled as the antenna, meant that gripping the phone a certain way could bridge a small gap between antenna segments and weaken the signal, leading Apple to offer free cases after public backlash." },

{ answer: "Meltdown", clues: [
  "Security researchers across multiple teams independently discover the exact same flaw at almost the same time, in early 2018.",
  "It's not a software bug in the traditional sense, the flaw lives in how processors execute instructions ahead of time before they're sure those instructions are needed.",
  "This particular variant lets a regular, unprivileged program peek into memory that's supposed to be locked away for the operating system's kernel only.",
  "It mostly affects one major chip manufacturer's processors, going back nearly two decades of product lines.",
  "Fixing it properly requires operating system level patches that, in the worst cases, measurably slow down affected machines."
], explainer: "This was a 2018 disclosed flaw mainly affecting Intel processors, exploiting speculative execution to let regular programs read protected kernel memory they should never have access to, requiring operating system patches that came with a real performance cost." },

{ answer: "Spectre", clues: [
  "Disclosed at the same time as a closely related flaw, this one turns out to be even harder to fully fix.",
  "Rather than being limited to one manufacturer, it affects processors across nearly every major chipmaker.",
  "It exploits the same general technique of processors guessing ahead at what instructions might be needed next.",
  "Instead of breaking the boundary between regular programs and the kernel, this one breaks the boundary between two separate, unrelated programs running side by side.",
  "Because the flaw is baked into how modern processor design fundamentally works, security researchers warn that variants of it may never be fully eliminated through software patches alone."
], explainer: "Disclosed alongside Meltdown in 2018, this flaw exploits speculative execution across nearly all modern processor brands to let one program read memory belonging to a separate, unrelated program, and because it's rooted in fundamental CPU design, it has proven far harder to fully patch away." },

{ answer: "Y2K Bug", clues: [
  "As the final years of the twentieth century wind down, a strange kind of anxiety builds around what will happen the moment the calendar flips over.",
  "The fear isn't about anything supernatural, it's about how old software stores dates.",
  "Decades of programs were written storing years using only the last two digits to save precious storage space.",
  "Nobody could be fully sure how systems would behave once that two digit year rolled from ninety nine back to zero.",
  "Governments and companies worldwide spend an estimated several hundred billion dollars combined preparing for it, and when the date actually arrives, only scattered, minor glitches occur."
], explainer: "This was a widespread concern that software storing years as just two digits would malfunction when the year rolled over from 99 to 00, prompting a massive, expensive global remediation effort that, largely thanks to that preparation, prevented any major disasters when the date actually arrived." },

{ answer: "CrowdStrike Outage", clues: [
  "On a Friday morning in the middle of 2024, computer screens at airports, hospitals, and banks around the world suddenly turn blue all at once.",
  "It's not a cyberattack, the company at the center of it confirms that almost immediately.",
  "A routine update to a piece of security software that runs at a very deep level inside Windows itself contained a flaw nobody caught before release.",
  "Affected machines get stuck in a loop, crashing, trying to restart, and crashing again the moment they boot back up.",
  "Roughly eight and a half million Windows devices go down at once, in what's been called the largest IT outage in history, with losses estimated in the billions."
], explainer: "In July 2024, a flawed content update to CrowdStrike's Falcon security software caused roughly 8.5 million Windows machines to crash into a boot loop worldwide, disrupting airlines, hospitals, and banks in what became known as the largest IT outage in history, despite not being a cyberattack at all." }

];

module.exports = { CASES_EASY, CASES_HARD };
