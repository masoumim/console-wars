// This file will populate the "system_specs" table with data

const requests = require("../services/requests.js");

// cpu, ram, storage, mediaType, maxRes, systemID
const addSystemspecs = async () => {
    await requests.addSystemspecs(null, null, null, "Cartridge (printed circuit board)", "160x200", 54);
    await requests.addSystemspecs(null, null, null, "None (Built-in)", null, 55);
    await requests.addSystemspecs(null, null, null, "Cartridge", null, 56);
    await requests.addSystemspecs(null, null, null, "None (Built-in)", null, 57);
    await requests.addSystemspecs(null, null, null, "None (Built-in)", null, 58);
    await requests.addSystemspecs("2MHz", "64bytes", null, "ROM Cartridge", "128x64", 59);
    await requests.addSystemspecs("1.19MHz", "128bytes", null, "ROM Cartridge", "160x192", 60);
    await requests.addSystemspecs("1.79MHz", "16kilobytes", null, "ROM Cartridge", "384x240", 61);
    await requests.addSystemspecs("1.789MHz", "4kilobytes", null, "ROM Cartridge", "320x204", 62);
    await requests.addSystemspecs("5.37MHz", "64bytes", null, "ROM Cartridge", "160x200", 63);
    await requests.addSystemspecs("2MHz", "1456bytes", null, "ROM Cartridge", "159x96", 64);
    await requests.addSystemspecs("3.68MHz", "1kilobytes", null, "ROM Cartridge", "256x192", 65);
    await requests.addSystemspecs("1.5MHz", "1kilobytes", null, "ROM Cartridge", "256x256", 66);
    await requests.addSystemspecs("3.58MHz", "1kilobytes", null, "ROM Cartridge", "256x192", 67);
    await requests.addSystemspecs("1.79MHz", "2kilobytes", null, "ROM Cartridge", "256x240", 68);
    await requests.addSystemspecs("3.58MHz", "8kilobytes", null, "ROM Cartridge", "256x192", 69);
    await requests.addSystemspecs("1.19MHz", "4kilobytes", null, "ROM Cartridge", "320x240", 70);
    await requests.addSystemspecs("4MHz", "128bytes", null, "ROM Cartridge", "309x246", 71);
    await requests.addSystemspecs("3.579MHz", "2kilobytes", null, "ROM Cartridge", "256x192", 72);
    await requests.addSystemspecs("5.91MHz", "6kilobytes", null, "ROM Cartridge", "320x238", 73);
    await requests.addSystemspecs("1.023MHz", "64kilobytes", null, "ROM Cartridge", "320x200", 74);
    await requests.addSystemspecs("12MHz", "7megabytes", null, "CD-ROM", "304x224", 75);
    await requests.addSystemspecs("12MHz", "64kilobytes", null, "ROM Cartridge", "320x224", 76);
    await requests.addSystemspecs("15.5MHz", "1megabyte", null, "CD-i", "768x560", 77);
    await requests.addSystemspecs("3.58MHz", "128kilobytes", null, "ROM Cartridge", "256x224", 78);
    await requests.addSystemspecs("7.6MHz", "64kilobytes", null, "ROM Cartridge", "320x224", 79);
    await requests.addSystemspecs("7.16MHz", "8kilobytes", null, "HuCard", "565x242", 80);
    await requests.addSystemspecs("4.19MHz", "8kilobytes", null, "Game Boy Game Pak", "160x144", 81);
    await requests.addSystemspecs("4MHz", "64kilobytes", null, "ROM Cartridge", "160x102", 82);
    await requests.addSystemspecs("3.5MHz", "8kilobytes", null, "ROM Cartridge", "160x144", 83);
    await requests.addSystemspecs("7.16MHz", "8kilobytes", null, "HuCard", "336x221", 84);
    await requests.addSystemspecs("12.5MHz", "2megabytes", null, "CD-ROM", "320x240", 85);
    await requests.addSystemspecs("26.59MHz", "2megabytes", null, "ROM Cartridge", "720x576", 86);
    await requests.addSystemspecs("28.6MHz", "2megabytes", null, "CD-ROM", "704x224", 87);
    await requests.addSystemspecs("33.8688MHz", "2megabytes", null, "CD-ROM", "640x480", 88);
    await requests.addSystemspecs("93.75MHz", "4megabytes", null, "Nintendo 64 Game Pak", "640x480", 89);
    await requests.addSystemspecs("7.6MHz", "64kilobytes", null, "ROM Cartridge", "320x224", 90);
    await requests.addSystemspecs("6.144MHz", null, null, "ROM Cartridge", "256x256", 91);
    await requests.addSystemspecs("200MHz", "16megabytes", null, "GD-ROM", "640x480", 92);
    await requests.addSystemspecs("294.912MHz", "32megabytes", null, "DVD", "640x480", 93);
    await requests.addSystemspecs("486MHz", "24megabytes", null, "GameCube Game Disc", "640x480", 94);
    await requests.addSystemspecs("733MHz", "64megabytes", "8gigabytes", "DVD", "640x480", 95);
    await requests.addSystemspecs("3.072MHz", "64kilobytes", null, "ROM Cartridge", "224x144", 96);
    await requests.addSystemspecs("16.78MHz", "32kilobytes", null, "Game Boy Advance Game Pak", "240x160", 97);
    await requests.addSystemspecs("104MHz", "16megabytes", "3.4megabytes", "MultiMediaCard", "176x208", 98);
    await requests.addSystemspecs("3.2GHz", "512megabytes", null, "DVD", "1920x1080", 99);
    await requests.addSystemspecs("3.2GHz", "256megabytes", "160gigabytes", "Blu-ray", "1920x1080", 100);
    await requests.addSystemspecs("729MHz", "24megabytes", "512megabytes", "Wii Optical Disc", "640x480", 101);
    await requests.addSystemspecs("67MHz", "4megabytes", "256kilobytes", "Nintendo DS Game Card", "256x192", 102);
    await requests.addSystemspecs("333MHz", "32megabytes", null, "UMD", "480x272", 103);
    await requests.addSystemspecs("1.24GHz", "2gigabytes", "32gigabytes", "Wii U Optical Disc", "1920x1080", 104);
    await requests.addSystemspecs("1.02GHz", "4gigabytes", "32gigabytes", "Game Card", "1920x1080", 105);
    await requests.addSystemspecs("1.6GHz", "8gigabytes", "500gigabytes", "Blu-ray", "1920x1080", 106);
    await requests.addSystemspecs("2.3GHz", "12gigabytes", "1terabytes", "Blu-ray", "3840x2160", 107);
    await requests.addSystemspecs("268MHz", "128megabytes", "2gigabytes", "Nintendo 3DS Game Card", "800x240", 108);
    await requests.addSystemspecs("444MHz", "512megabytes", "1gigabytes", "PS Vita Card", "960x544", 109);
    await requests.addSystemspecs("3.5GHz", "16gigabytes", "825gigabytes", "Ultra HD Blu-ray", "7680x4320", 110);
    await requests.addSystemspecs("3.8GHz", "16gigabytes", "1terabytes", "Ultra HD Blu-ray", "7680x4320", 111);
}
addSystemspecs();
// Systems
// 54 | Magnavox Odyssey
// 55 | Color TV-Game 6
// 56 | Telstar Arcade
// 57 | Telstar Marksman
// 58 | TV Tennis Electrotennis
// 59 | Fairchild Channel F
// 60 | Atari 2600
// 61 | Atari 5200
// 62 | Bally Astrocade
// 63 | Magnavox Odyssey 2
// 64 | Intellivision
// 65 | ColecoVision
// 66 | Vectrex
// 67 | SG-1000
// 68 | Nintendo Entertainment System
// 69 | Master System
// 70 | Atari 7800
// 71 | Super Cassette Vision
// 72 | Casio PV-1000
// 73 | Philips Videopac+ G7400
// 74 | Commodore 64 Games System
// 75 | Neo Geo CD
// 76 | Neo Geo AES
// 77 | Philips CD-i
// 78 | Super Nintendo Entertainment System
// 79 | Sega Genesis / Mega Drive
// 80 | TurboGrafx-16 / PC Engine
// 81 | Game Boy
// 82 | Atari Lynx
// 83 | Game Gear
// 84 | Turbo Express
// 85 | 3DO Interactive Multiplayer
// 86 | Atari Jaguar
// 87 | Sega Saturn
// 88 | Sony PlayStation
// 89 | Nintendo 64
// 90 | Sega Nomad / Genesis Nomad
// 91 | Neo Geo Pocket
// 92 | Dreamcast
// 93 | PlayStation 2
// 94 | Nintendo GameCube
// 95 | Xbox
// 96 | WonderSwan
// 97 | Game Boy Advance
// 98 | N-Gage
// 99 | Xbox 360
// 100 | PlayStation 3
// 101 | Wii
// 102 | Nintendo DS
// 103 | PlayStation Portable
// 104 | Wii U
// 105 | Nintendo Switch
// 106 | PlayStation 4
// 107 | Xbox One
// 108 | Nintendo 3DS
// 109 | PlayStation Vita
// 110 | PlayStation 5
// 111 | Xbox Series X