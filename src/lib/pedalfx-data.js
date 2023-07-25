export let pedals = [
  {
    id: "43d53d5b-4d25-4bc0-af21-61fb27537013",
    pedalName: "Spacetime",
    manufacturer: "Vahlbruch",
    madeIn: "Germany",
    category: ["delay"],
    stereo: false,
    bypass: "true OR buffered",
    voltage: "9V",
    battery: true,
    polarity: "center negative",
    inputImpedance: 1.0,
    outputImpedance: 1.0,
    bypassCurrentDrawManufacturer: NaN,
    engagedCurrentDrawManufacturer: 60,
    bypassCurrentDrawOwnMeasurement: NaN,
    engagedCurrentDrawOwnMeasurement: NaN,
    width: 70,
    depth: 115,
    height: 48,
    imagePath: "https://res.cloudinary.com/dq4il1x1k/image/upload/v1689787799/spacetime_zha7xh.png",
    footswitches: ["on/off"],
    knobs: ["MIX", "TIME", "REPEATS"],
    switches: ["treble content"],
    dipswitches: ["TBP/BBP"],
    jacksLeft: ["out"],
    jacksRight: ["in"],
    jacksTop: ["power"],
    jacksFront: [""],
    soundDescription: "I like the warm repeats they are just lying behind the signal and give a beautiful ambiance.",
    myComment: "AWWWWWSOME DELAY AY AY AY",
    niceToKnow: "You can choose if the pedal powers up in on or bypass state. To change the state: Step 1: Unplug the power supply cable. Step 2: Hold down on/off MagTraB button. Step 3: Plug in again the power supply cable. Step 4: Release on/off MagTraB button. DONE! The next time your pedal powers up it will automatically start in the other state.",
    tags: ["warm", "slapback", "alwayson", "timebased"],
  },
  {
    id: "9a9d95d7-2063-44f9-8e4a-ea363f0089f6",
    pedalName: "DELTA_II",
    manufacturer: "Spaceman",
    category: ["modulation", "tremolo", "harmonic trem"],
    madeIn: "USA",
    stereo: false,
    bypass: true,
    voltage: "9 - 18 V",
    battery: false,
    polarity: "center negative",
    inputImpedance: 1.0,
    outputImpedance: NaN,
    bypassCurrentDrawManufacturer: 19.5,
    engagedCurrentDrawManufacturer: 45,
    bypassCurrentDrawOwnMeasurement: NaN,
    engagedCurrentDrawOwnMeasurement: NaN,
    width: 66,
    depth: 120,
    height: 55,
    imagePath: "https://res.cloudinary.com/dq4il1x1k/image/upload/v1689787660/delta2_dgbc8a.png",
    footswitches: ["on/off"],
    knobs: ["DEPTH", "FREQ", "RATE", "LAG", "RES"],
    switches: ["VOICE"],
    dipswitches: ["expParameter"],
    jacksLeft: ["out"],
    jacksRight: ["in", "Expression/Tab"],
    jacksTop: ["power"],
    jacksFront: [""],
    soundDescription: "It is hard to tame the Rate that gets fast quite quickly, but once you tame it, this is classic to fun and back again.",
    myComment: "Fun of a Trem",
    niceToKnow: "ALTERNATE MODES - Apply power with the footswitch depressed. The LAG control transforms into a 4 position mode selector with additional LFO presets. Mode 1 - LFO output 1 runs at normal speed, and LFO output 2 at half speed. Mode 2 - Same as mode 1, but offbeat from each other. Mode 3 - LFO output 2 runs at normal speed, and LFO output 1 at half speed. Mode 4 - Same as mode 3, but offbeat from each other.",
    tags: ["harmonic", "versatile", "expression", "modulation"],
  },
  {
    id: "c487741c-c79f-4899-accb-2f9b5acfa7eb",
    pedalName: "MUDHONEY",
    manufacturer: "T-Rex",
    category: ["overdrive", "distortion"],
    madeIn: "Denmark",
    stereo: false,
    bypass: true,
    voltage: "8.5 - 12.5 V",
    battery: false,
    polarity: "center negative",
    inputImpedance: 1,
    outputImpedance: 1,
    bypassCurrentDrawManufacturer: NaN,
    engagedCurrentDrawManufacturer: 6,
    bypassCurrentDrawOwnMeasurement: NaN,
    engagedCurrentDrawOwnMeasurement: NaN,
    width: 100,
    depth: 120,
    height: 55,
    imagePath: "https://res.cloudinary.com/dq4il1x1k/image/upload/v1689787671/mudhoney_vgertc.png",
    footswitches: ["on/off"],
    knobs: ["GAIN", "LEVEL", "TONE"],
    switches: ["BOOST"],
    dipswitches: [""],
    jacksLeft: ["out"],
    jacksRight: ["in"],
    jacksTop: ["power"],
    jacksFront: [""],
    soundDescription: "You can cover a lot of tones with this one. Crunch to Fuzz, it is as it is.",
    myComment: "Find a good compromise setting and change drastically by using the boost switch",
    niceToKnow: "",
    tags: ["crunch", "fuzzy", "distortion"],
  },
];
;

// // Function to check if the value is NaN and return an empty string if so
// function formatNumber(value) {
//   return isNaN(value) ? "" : value.toString();
// }

// // Render the array
// pedals.forEach((pedal) => {
//   console.log("Name:", pedal.name);
//   console.log("Stereo:", pedal.stereo);
//   console.log("Bypass:", pedal.bypass);
//   console.log("Voltage:", formatNumber(pedal.voltage));
//   console.log("Battery:", pedal.battery);
//   console.log("Input Impedance:", formatNumber(pedal.inputImpedance));
//   console.log("Output Impedance:", formatNumber(pedal.outputImpedance));
//   console.log("Bypass Current Draw (Manufacturer):", formatNumber(pedal.bypassCurrentDrawManufacturer));
//   console.log("Engaged Current Draw (Manufacturer):", formatNumber(pedal.engagedCurrentDrawManufacturer));
//   console.log("Bypass Current Draw (Own Measurement):", formatNumber(pedal.bypassCurrentDrawOwnMeasurement));
//   console.log("Engaged Current Draw (Own Measurement):", formatNumber(pedal.engagedCurrentDrawOwnMeasurement));
//   console.log("---");
// });
