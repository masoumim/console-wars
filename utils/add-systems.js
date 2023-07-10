// This file will populate the "systems" table with data

const requests = require("../services/requests.js");

addAllsystems = async () => {
    await requests.addSystem("Magnavox Odyssey", 1972, 1975, 28, 1, 350000, "Console", 0, "Magnavox Odyssey 2", null, 0, null, 30);
    await requests.addSystem("Color TV-Game 6", 1977, 1983, 6, 1, 1000000, "Console", 0, "Nintendo Entertainment System", null, 0, null, 31);
    await requests.addSystem("Telstar Arcade", 1977, null, 4, 1, null, "Console", 0, null, null, 0, null, 32);
    await requests.addSystem("Telstar Marksman", 1978, null, 6, 1, null, "Console", 0, null, null, 0, null, 32);
    await requests.addSystem("TV Tennis Electrotennis", 1975, null, null, 1, 10000, "Console", 0, "TV Game System 10", null, 0, null, 33);
    await requests.addSystem("Fairchild Channel F", 1976, 1983, 27, 2, 350000, "Console", 0, "Channel F System II", null, 0, null, 34);
    await requests.addSystem("Atari 2600", 1977, 1992, 519, 2, 30000000, "Console", 0, "Atari 5200", "Atari Home Pong", 0, null, 35);
    await requests.addSystem("Atari 5200", 1982, 1984, 69, 2, 1000000, "Console", 0, "Atari 7800", "Atari 2600", 0, null, 35);
    await requests.addSystem("Bally Astrocade", 1978, 1983, 28, 2, null, "Console", 0, null, null, 0, null, 36);
    await requests.addSystem("Magnavox Odyssey 2", 1978, 1984, 47, 2, 2000000, "Console", 0, "Philips Videopac+ G7400", "Magnavox Odyssey", 0, null, 30);
    await requests.addSystem("Intellivision", 1979, 1990, 132, 2, 3000000, "Console", 0, null, null, 0, null, 39);
    await requests.addSystem("ColecoVision", 1982, 1985, 129, 2, 2000000, "Console", 0, null, "Coleco Telstar series", 0, null, 32);
    await requests.addSystem("Vectrex", 1982, 1984, 28, 2, null, "Console", 0, null, null, 0, null, 38);
    await requests.addSystem("SG-1000", 1983, 1984, 74, 3, 1400000, "Console", 0, "Master System", null, 0, null, 37);
    await requests.addSystem("Nintendo Entertainment System", 1983, 1995, 716, 3, 61000000, "Console", 0, "Super Nintendo Entertainment System", "Color TV-Game", 0, null, 31);
    await requests.addSystem("Master System", 1985, 1989, 312, 3, 13000000, "Console", 0, "Sega Genesis", "SG-1000", 0, null, 37);
    await requests.addSystem("Atari 7800", 1986, 1992, 59, 3, 100000, "Console", 0, "Atari XEGS", "Atari 5200", 0, null, 35);
    await requests.addSystem("Super Cassette Vision", 1984, 1987, 30, 3, 300000, "Console", 0, null, "Cassette Vision", 0, null, 33);
    await requests.addSystem("Casio PV-1000", 1983, 1984, 13, 3, null, "Console", 0, "Casio Loopy", null, 0, null, 40);
    await requests.addSystem("Philips Videopac+ G7400", 1983, null, 15, 3, null, "Console", 0, "Philips CD-i", "Philips Videopac G7000", 0, null, 41);
    await requests.addSystem("Commodore 64 Games System", 1990, null, 34, 3, 20000, "Console", 0, "Commodore CDTV", "MAX Machine", 0, null, 42);
    await requests.addSystem("Neo Geo CD", 1994, 1997, 97, 4, 570000, "Console", 0, null, "Neo Geo AES", 0, null, 44);
    await requests.addSystem("Neo Geo AES", 1990, 1997, 117, 4, 1800000, "Console", 0, "Neo Geo CD", null, 0, null, 44);
    await requests.addSystem("Philips CD-i", 1991, 1998, 208, 4, 1000000, "Console", 0, null, "Philips Videopac+ G4700", 0, null, 41);
    await requests.addSystem("Super Nintendo Entertainment System", 1990, 2005, 1754, 4, 49000000, "Console", 0, "Nintendo 64", "Nintendo Entertainment System", 0, null, 31);
    await requests.addSystem("Sega Genesis / Mega Drive", 1988, 1997, 880, 4, 30000000, "Console", 0, "Sega Saturn", "Master System", 0, null, 37);
    await requests.addSystem("TurboGrafx-16 / PC Engine", 1987, 1994, 678, 4, 5620000, "Console", 0, "PC Engine SuperGrafx", null, 0, null, 43);
    await requests.addSystem("Game Boy", 1989, 2003, 1046, 4, 118000000, "Handheld", 0, "Game Boy Color", "Game & Watch", 0, null, 31);
    await requests.addSystem("Atari Lynx", 1989, 1995, 71, 4, 2000000, "Handheld", 0, null, null, 0, null, 35);
    await requests.addSystem("Game Gear", 1990, 1997, 366, 4, 10620000, "Handheld", 0, "Sega Nomad", null, 0, null, 37);
    await requests.addSystem("Turbo Express", 1990, 1994, 678, 4, 1500000, "Handheld", 0, null, null, 0, null, 43);
    await requests.addSystem("3DO Interactive Multiplayer", 1993, 1996, 251, 5, 2000000, "Console", 0, "Panasonic M2 (cancelled)", null, 0, null, 45);
    await requests.addSystem("Atari Jaguar", 1993, 1996, 50, 5, 150000, "Console", 0, null, "Atari 7800", 0, null, 35);
    await requests.addSystem("Sega Saturn", 1994, 2000, 1046, 5, 9260000, "Console", 0, "Dreamcast", "Sega Genesis / Mega Drive", 0, null, 37);
    await requests.addSystem("Sony PlayStation", 1994, 2006, 4105, 5, 102490000, "Console", 0, "PlayStation 2", null, 0, null, 46);
    await requests.addSystem("Nintendo 64", 1996, 2002, 388, 5, 32930000, "Console", 0, "GameCube", "Super Nintendo Entertainment System", 0, null, 31);
    await requests.addSystem("Sega Nomad / Genesis Nomad", 1995, 1999, 880, 5, 100000, "Handheld", 0, null, "Game Gear", 0, null, 37);
    await requests.addSystem("Neo Geo Pocket", 1998, 1999, 10, 5, null, "Handheld", 0, "Neo Geo Pocket Color", null, 0, null, 44);
    await requests.addSystem("Dreamcast", 1998, 2001, 616, 6, 9130000, "Console", 0, null, "Sega Saturn", 0, null, 37);
    await requests.addSystem("PlayStation 2", 2000, 2013, 4376, 6, 158700000, "Console", 0, "PlayStation 3", "PlayStation", 0, null, 46);
    await requests.addSystem("Nintendo GameCube", 2001, 2007, 650, 6, 21740000, "Console", 0, "Wii", "Nintendo 64", 0, null, 31);
    await requests.addSystem("Xbox", 2001, 2006, 996, 6, 24000000, "Console", 0, "Xbox 360", null, 0, null, 49);
    await requests.addSystem("WonderSwan", 1999, 2003, 109, 6, 3500000, "Handheld", 0, null, "Design Master Senshi Mangajukuu", 0, null, 47);
    await requests.addSystem("Game Boy Advance", 2001, 2009, 1538, 6, 81510000, "Handheld", 0, "Nintendo DS", "Game Boy Color", 0, null, 31);
    await requests.addSystem("N-Gage", 2003, 2006, 65, 6, 3000000, "Handheld", 0, null, null, 0, null, 48);
    await requests.addSystem("Xbox 360", 2005, 2016, 2154, 7, 84000000, "Console", 0, "Xbox One", "Xbox", 0, null, 49);
    await requests.addSystem("PlayStation 3", 2006, 2017, 2562, 7, 87400000, "Console", 0, "PlayStation 4", "PlayStation 2", 0, null, 46);
    await requests.addSystem("Wii", 2006, 2013, 1640, 7, 101630000, "Console", 0, "Wii U", "Nintendo GameCube", 0, null, 31);
    await requests.addSystem("Nintendo DS", 2004, 2014, 3467, 7, 154000000, "Handheld", 0, "Nintendo 3DS", "Game Boy Advance", 0, null, 31);
    await requests.addSystem("PlayStation Portable", 2004, 2014, 1925, 7, 82000000, "Handheld", 0, "PlayStation Vita", "PocketStation", 0, null, 46);
    await requests.addSystem("Wii U", 2012, 2017, 795, 8, 13560000, "Console", 0, "Nintendo Switch", "Wii", 0, null, 31);
    await requests.addSystem("Nintendo Switch", 2017, null, 4518, 8, 125620000, "Console", 0, null, "Wii U", 0, null, 31);
    await requests.addSystem("PlayStation 4", 2013, null, 3318, 8, 106000000, "Console", 0, "PlayStation 5", "PlayStation 3", 0, null, 46);
    await requests.addSystem("Xbox One", 2013, 2020, 2961, 8, 58000000, "Console", 0, "Xbox Series X/S", "Xbox 360", 0, null, 49);
    await requests.addSystem("Nintendo 3DS", 2011, 2020, 1525, 8, 75940000, "Handheld", 0, "Nintendo Switch", "Nintendo DS", 0, null, 31);
    await requests.addSystem("PlayStation Vita", 2011, 2019, 1500, 8, 6000000, "Handheld", 0, null, "PlayStation Portable", 0, null, 46);
    await requests.addSystem("PlayStation 5", 2020, null, 560, 9, 30000000, "Console", 0, null, "PlayStation 4", 0, null, 46);
    await requests.addSystem("Xbox Series X", 2020, null, 397, 9, 21000000, "Console", 0, null, "Xbox One", 0, null, 49);
}
addAllsystems();
// 30 | Magnavox
// 31 | Nintendo
// 32 | Coleco
// 33 | Epoch Co
// 34 | Fairchild Camera and Instrument
// 35 | Atari
// 36 | Bally Manufacturing
// 37 | Sega
// 38 | General Consumer Electronics
// 39 | Mattel Electronics
// 40 | Casio
// 41 | Phillips
// 42 | Commodore International
// 43 | NEC Home Electronics
// 44 | SNK
// 45 | Panasonic
// 46 | Sony
// 47 | Bandai
// 48 | Nokia
// 49 | Microsoft
// 50 | Valve     