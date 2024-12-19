const physicsQuizQuestions = [
    {
        question: "Which of the following units is used to measure electrical resistance?",
        options: ["A) Ampere", "B) Volt", "C) Ohm", "D) Watt"],
        correctAnswer: "C",
        explanation: "The ohm (Ω) is the SI unit of electrical resistance, measuring how much a material opposes the flow of electric current."
    },
    {
        question: "A stone thrown vertically upward reaches its maximum height when its:",
        options: ["A) Acceleration is zero", "B) Velocity is zero", "C) Displacement is maximum", "D) Both B and C"],
        correctAnswer: "D",
        explanation: "At maximum height, the velocity becomes zero momentarily before the stone begins to fall, and this point also represents the maximum displacement from the starting point."
    },
    {
        question: "What is the process by which liquid changes into gas below its boiling point?",
        options: ["A) Condensation", "B) Evaporation", "C) Sublimation", "D) Freezing"],
        correctAnswer: "B",
        explanation: "Evaporation occurs at any temperature below boiling point when molecules at the surface gain enough energy to escape as vapor."
    },
    {
        question: "In a transformer, which of these quantities remains constant?",
        options: ["A) Current", "B) Voltage", "C) Frequency", "D) Power"],
        correctAnswer: "C",
        explanation: "The frequency of the alternating current remains unchanged when passing through a transformer, while voltage and current can be stepped up or down."
    },
    {
        question: "The bending of light as it passes from one medium to another is called:",
        options: ["A) Reflection", "B) Refraction", "C) Diffraction", "D) Dispersion"],
        correctAnswer: "B",
        explanation: "Refraction occurs when light changes speed as it passes from one medium to another, causing it to bend at the boundary."
    },
    {
        question: "Which force is responsible for keeping planets in orbit around the Sun?",
        options: ["A) Magnetic force", "B) Gravitational force", "C) Electrostatic force", "D) Nuclear force"],
        correctAnswer: "B",
        explanation: "The gravitational force between the Sun and planets keeps them in their elliptical orbits according to Newton's law of universal gravitation."
    },
    {
        question: "The SI unit of pressure is:",
        options: ["A) Newton", "B) Pascal", "C) Joule", "D) Bar"],
        correctAnswer: "B",
        explanation: "The pascal (Pa) is the SI unit of pressure, defined as one newton per square meter (N/m²)."
    },
    {
        question: "Which mirror is used in a car's headlight to produce a parallel beam of light?",
        options: ["A) Convex mirror", "B) Concave mirror", "C) Plane mirror", "D) None of these"],
        correctAnswer: "B",
        explanation: "A concave mirror is used in headlights because it can reflect light rays parallel to its principal axis when a light source is placed at its focus."
    },
    {
        question: "Sound waves cannot travel through:",
        options: ["A) Water", "B) Air", "C) Vacuum", "D) Steel"],
        correctAnswer: "C",
        explanation: "Sound waves are mechanical waves that require a medium to propagate. In a vacuum, there is no medium for the waves to travel through."
    },
    {
        question: "The moment of force is measured in:",
        options: ["A) Newton", "B) Newton-meter", "C) Kilogram-meter", "D) Joule"],
        correctAnswer: "B",
        explanation: "The moment of force (torque) is measured in newton-meters (N⋅m), as it is the product of force and perpendicular distance from the pivot."
    },
    {
        question: "Which color of light has the highest frequency?",
        options: ["A) Red", "B) Green", "C) Blue", "D) Violet"],
        correctAnswer: "D",
        explanation: "In the visible spectrum, violet light has the highest frequency and shortest wavelength."
    },
    {
        question: "A body floats in a liquid when:",
        options: ["A) Its density is less than the liquid's density", "B) Its density is more than the liquid's density", "C) Its density equals the liquid's density", "D) Both A and C"],
        correctAnswer: "D",
        explanation: "An object floats when its density is either equal to or less than the density of the liquid it's placed in."
    },
    {
        question: "Which of these is not a vector quantity?",
        options: ["A) Velocity", "B) Force", "C) Mass", "D) Acceleration"],
        correctAnswer: "C",
        explanation: "Mass is a scalar quantity as it only has magnitude and no direction, unlike vectors which have both magnitude and direction."
    },
    {
        question: "The process of heat transfer through actual movement of molecules is called:",
        options: ["A) Conduction", "B) Convection", "C) Radiation", "D) Reflection"],
        correctAnswer: "B",
        explanation: "Convection involves the transfer of heat through the actual movement of fluid molecules from one place to another."
    },
    {
        question: "What happens to the resistance of a conductor as its temperature increases?",
        options: ["A) Decreases", "B) Increases", "C) Remains constant", "D) Becomes zero"],
        correctAnswer: "B",
        explanation: "As temperature increases, the atoms in the conductor vibrate more, increasing the likelihood of collisions with electrons, thus increasing resistance."
    },
    {
        question: "The type of energy stored in a compressed spring is:",
        options: ["A) Kinetic energy", "B) Potential energy", "C) Thermal energy", "D) Chemical energy"],
        correctAnswer: "B",
        explanation: "A compressed spring stores elastic potential energy, which can be converted to kinetic energy when released."
    },
    {
        question: "Which of these waves does not require a medium to propagate?",
        options: ["A) Sound waves", "B) Water waves", "C) Light waves", "D) Mechanical waves"],
        correctAnswer: "C",
        explanation: "Light waves are electromagnetic waves that can travel through vacuum, unlike mechanical waves which require a medium."
    },
    {
        question: "The force of friction always acts:",
        options: ["A) Perpendicular to the surface", "B) Parallel to the surface", "C) At 45 degrees to the surface", "D) In any direction"],
        correctAnswer: "B",
        explanation: "Friction always acts parallel to the surface of contact and opposes the relative motion or attempted motion between surfaces."
    },
    {
        question: "What is the unit of electric power?",
        options: ["A) Volt", "B) Ampere", "C) Watt", "D) Joule"],
        correctAnswer: "C",
        explanation: "The watt (W) is the SI unit of power, defined as one joule per second."
    },
    {
        question: "In which process does matter change directly from solid to gas?",
        options: ["A) Melting", "B) Evaporation", "C) Sublimation", "D) Condensation"],
        correctAnswer: "C",
        explanation: "Sublimation is the process where a solid changes directly into gas without passing through the liquid state."
    },
    {
        question: "The image formed by a plane mirror is:",
        options: ["A) Real and erect", "B) Virtual and erect", "C) Real and inverted", "D) Virtual and inverted"],
        correctAnswer: "B",
        explanation: "A plane mirror forms a virtual image that appears to be behind the mirror and is erect (upright)."
    },
    {
        question: "Which principle explains why a balloon expands when heated?",
        options: ["A) Archimedes' principle", "B) Charles' law", "C) Boyle's law", "D) Newton's law"],
        correctAnswer: "B",
        explanation: "Charles' law states that the volume of a fixed mass of gas is directly proportional to its temperature at constant pressure."
    },
    {
        question: "The SI unit of magnetic flux density is:",
        options: ["A) Weber", "B) Tesla", "C) Henry", "D) Gauss"],
        correctAnswer: "B",
        explanation: "The tesla (T) is the SI unit of magnetic flux density, measuring the strength of a magnetic field."
    },
    {
        question: "Which mirror can form both real and virtual images?",
        options: ["A) Plane mirror", "B) Convex mirror", "C) Concave mirror", "D) None of these"],
        correctAnswer: "C",
        explanation: "A concave mirror can form both real and virtual images depending on the position of the object relative to its focal point."
    },
    {
        question: "What is the SI unit of frequency?",
        options: ["A) Second", "B) Hertz", "C) Meter", "D) Radian"],
        correctAnswer: "B",
        explanation: "The hertz (Hz) is the SI unit of frequency, defined as one cycle per second."
    },
    {
        question: "What is the primary reason for the seasons on Earth?",
        options: ["A) Varying distance from the Sun", "B) Earth's axial tilt", "C) Rotation of the Earth", "D) Ocean currents"],
        correctAnswer: "B",
        explanation: "Earth's 23.5-degree axial tilt causes different hemispheres to receive varying amounts of sunlight throughout the year, creating seasons."
    },
    {
        question: "The energy possessed by a body due to its position or configuration is called:",
        options: ["A) Kinetic energy", "B) Nuclear energy", "C) Potential energy", "D) Chemical energy"],
        correctAnswer: "C",
        explanation: "Potential energy is stored energy that depends on an object's position or state, such as gravitational potential energy or elastic potential energy."
    },
    {
        question: "Which color light has the longest wavelength?",
        options: ["A) Blue", "B) Green", "C) Yellow", "D) Red"],
        correctAnswer: "D",
        explanation: "In the visible spectrum, red light has the longest wavelength and lowest frequency."
    },
    {
        question: "The rate of change of momentum is equal to:",
        options: ["A) Velocity", "B) Acceleration", "C) Force", "D) Power"],
        correctAnswer: "C",
        explanation: "According to Newton's Second Law, the rate of change of momentum is equal to the force applied."
    },
    {
        question: "Which of these is an example of longitudinal waves?",
        options: ["A) Light waves", "B) Water waves", "C) Sound waves", "D) Radio waves"],
        correctAnswer: "C",
        explanation: "Sound waves are longitudinal waves where particles vibrate parallel to the direction of wave propagation."
    },
    {
        question: "The period of a pendulum depends on:",
        options: ["A) Mass of the bob", "B) Length of the pendulum", "C) Initial displacement", "D) Material of the bob"],
        correctAnswer: "B",
        explanation: "The period of a simple pendulum depends primarily on its length and the acceleration due to gravity, not on mass or initial displacement."
    },
    {
        question: "In a step-up transformer, what happens to the current in the secondary coil?",
        options: ["A) Increases", "B) Decreases", "C) Remains the same", "D) Becomes zero"],
        correctAnswer: "B",
        explanation: "In a step-up transformer, as voltage increases in the secondary coil, current decreases proportionally to maintain the same power."
    },
    {
        question: "Which law states that the sum of the currents entering a junction equals the sum of currents leaving it?",
        options: ["A) Ohm's Law", "B) Kirchhoff's First Law", "C) Faraday's Law", "D) Lenz's Law"],
        correctAnswer: "B",
        explanation: "Kirchhoff's First Law (Current Law) states that the algebraic sum of currents at any junction is zero."
    },
    {
        question: "The optical density of a medium is related to:",
        options: ["A) Its mass density", "B) Its refractive index", "C) Its temperature", "D) Its volume"],
        correctAnswer: "B",
        explanation: "Optical density is directly related to the refractive index of the medium, which affects how light travels through it."
    },
    {
        question: "Which of these particles has a negative charge?",
        options: ["A) Proton", "B) Neutron", "C) Electron", "D) Alpha particle"],
        correctAnswer: "C",
        explanation: "Electrons carry a negative elementary charge, while protons are positive and neutrons are neutral."
    },
    {
        question: "The phenomenon of light splitting into its component colors is called:",
        options: ["A) Reflection", "B) Refraction", "C) Dispersion", "D) Diffraction"],
        correctAnswer: "C",
        explanation: "Dispersion occurs when white light splits into its component colors due to different wavelengths being refracted at different angles."
    },
    {
        question: "What is the SI unit of inductance?",
        options: ["A) Weber", "B) Tesla", "C) Henry", "D) Farad"],
        correctAnswer: "C",
        explanation: "The henry (H) is the SI unit of inductance, measuring a circuit's ability to oppose changes in current."
    },
    {
        question: "A water pump works on the principle of:",
        options: ["A) Bernoulli's principle", "B) Pascal's law", "C) Archimedes' principle", "D) Newton's law"],
        correctAnswer: "A",
        explanation: "Water pumps utilize Bernoulli's principle, which states that an increase in fluid velocity occurs simultaneously with a decrease in pressure."
    },
    {
        question: "The specific heat capacity of a substance is measured in:",
        options: ["A) Joule", "B) Joule per kilogram", "C) Joule per kelvin", "D) Joule per kilogram kelvin"],
        correctAnswer: "D",
        explanation: "Specific heat capacity is measured in J/kg⋅K, representing the energy needed to raise 1 kg of substance by 1 kelvin."
    },
    {
        question: "Which of these is a scalar product of vectors?",
        options: ["A) Momentum", "B) Torque", "C) Work", "D) Force"],
        correctAnswer: "C",
        explanation: "Work is calculated as the scalar (dot) product of force and displacement vectors."
    },
    {
        question: "The property of a body to resist any change in its state of rest or motion is called:",
        options: ["A) Force", "B) Momentum", "C) Inertia", "D) Energy"],
        correctAnswer: "C",
        explanation: "Inertia is the tendency of an object to resist changes in its state of motion, as described in Newton's First Law."
    },
    {
        question: "Which type of mirror always forms a virtual, erect, and diminished image?",
        options: ["A) Plane mirror", "B) Convex mirror", "C) Concave mirror", "D) None of these"],
        correctAnswer: "B",
        explanation: "A convex mirror always produces a virtual, erect, and diminished image regardless of the object's position."
    },
    {
        question: "The temperature at which a liquid starts boiling depends on:",
        options: ["A) Volume of liquid", "B) Atmospheric pressure", "C) Shape of container", "D) Mass of liquid"],
        correctAnswer: "B",
        explanation: "The boiling point of a liquid varies with atmospheric pressure; higher pressure results in a higher boiling point."
    },
    {
        question: "In nuclear fission, mass is converted to:",
        options: ["A) Momentum", "B) Energy", "C) Force", "D) Pressure"],
        correctAnswer: "B",
        explanation: "According to Einstein's E=mc², mass can be converted to energy in nuclear reactions like fission."
    },
    {
        question: "Which electromagnetic waves have the highest frequency?",
        options: ["A) Radio waves", "B) X-rays", "C) Gamma rays", "D) Ultraviolet rays"],
        correctAnswer: "C",
        explanation: "Gamma rays have the highest frequency and shortest wavelength in the electromagnetic spectrum."
    },
    {
        question: "The time period of a simple pendulum is doubled. The length of the pendulum becomes:",
        options: ["A) Two times", "B) Three times", "C) Four times", "D) Half"],
        correctAnswer: "C",
        explanation: "Since period T ∝ √L, when T doubles, L must increase by a factor of 4."
    },
    {
        question: "The electric potential difference is measured using:",
        options: ["A) Ammeter", "B) Voltmeter", "C) Galvanometer", "D) Potentiometer"],
        correctAnswer: "B",
        explanation: "A voltmeter is connected in parallel to measure the potential difference between two points in a circuit."
    },
    {
        question: "Which law relates the volume and pressure of a gas at constant temperature?",
        options: ["A) Charles' law", "B) Boyle's law", "C) Gay-Lussac's law", "D) Avogadro's law"],
        correctAnswer: "B",
        explanation: "Boyle's law states that at constant temperature, the pressure of a fixed mass of gas is inversely proportional to its volume."
    },
    {
        question: "The focal length of a lens is 20 cm. Its power in diopters is:",
        options: ["A) 20 D", "B) 5 D", "C) 0.05 D", "D) 0.2 D"],
        correctAnswer: "B",
        explanation: "Power = 1/focal length (in meters). So, 1/0.2 = 5 diopters."
    },
    {
        question: "Which of these is conserved in both elastic and inelastic collisions?",
        options: ["A) Kinetic energy", "B) Momentum", "C) Velocity", "D) Speed"],
        correctAnswer: "B",
        explanation: "Linear momentum is conserved in all collisions, while kinetic energy is only conserved in elastic collisions."
    },
    {
        question: "What is the name of the force that keeps an object moving in a circular path?",
        options: ["A) Gravitational force", "B) Centripetal force", "C) Frictional force", "D) Normal force"],
        correctAnswer: "B",
        explanation: "Centripetal force is the net force acting towards the center of the circular path, maintaining circular motion."
    },
    {
        question: "Which of these devices converts sound energy to electrical energy?",
        options: ["A) Speaker", "B) Microphone", "C) Amplifier", "D) Transformer"],
        correctAnswer: "B",
        explanation: "A microphone contains a diaphragm that vibrates with sound waves and converts these vibrations into electrical signals."
    },
    {
        question: "The ratio of displacement to time taken is called:",
        options: ["A) Speed", "B) Velocity", "C) Acceleration", "D) Momentum"],
        correctAnswer: "B",
        explanation: "Velocity is a vector quantity that measures displacement per unit time, indicating both speed and direction."
    },
    {
        question: "Which of these is not a method of reducing friction?",
        options: ["A) Using lubricants", "B) Using ball bearings", "C) Increasing surface roughness", "D) Streamlining"],
        correctAnswer: "C",
        explanation: "Increasing surface roughness increases friction, while the other options help reduce friction."
    },
    {
        question: "The device used to measure very small distances accurately is:",
        options: ["A) Meter scale", "B) Vernier calipers", "C) Measuring tape", "D) Ruler"],
        correctAnswer: "B",
        explanation: "Vernier calipers can measure lengths with precision up to 0.01 mm using the main scale and vernier scale."
    },
    {
        question: "In which type of mirror is the focal length equal to half the radius of curvature?",
        options: ["A) Plane mirror", "B) Convex mirror", "C) Concave mirror", "D) Both B and C"],
        correctAnswer: "D",
        explanation: "For both convex and concave mirrors, the focal length is always equal to half the radius of curvature."
    },
    {
        question: "The SI unit of luminous intensity is:",
        options: ["A) Lumen", "B) Lux", "C) Candela", "D) Watt"],
        correctAnswer: "C",
        explanation: "The candela (cd) is the SI unit of luminous intensity, measuring the power emitted by a light source in a particular direction."
    },
    {
        question: "When a gas is compressed adiabatically, what happens to its temperature?",
        options: ["A) Decreases", "B) Increases", "C) Remains constant", "D) Becomes zero"],
        correctAnswer: "B",
        explanation: "In adiabatic compression, no heat is exchanged with the surroundings, so the work done on the gas increases its temperature."
    },
    {
        question: "A body has zero velocity but non-zero acceleration. This is possible when the body:",
        options: ["A) Is at rest", "B) Is about to change direction", "C) Is moving with constant speed", "D) Has uniform motion"],
        correctAnswer: "B",
        explanation: "At the instant when an object changes direction, its velocity becomes zero while acceleration exists to change the direction."
    },
    {
        question: "The angle between the incident ray and the normal is called:",
        options: ["A) Angle of reflection", "B) Angle of refraction", "C) Angle of incidence", "D) Critical angle"],
        correctAnswer: "C",
        explanation: "The angle of incidence is measured between the incident ray and the normal (perpendicular) to the surface at the point of incidence."
    },
    {
        question: "The product of mass and acceleration due to gravity is:",
        options: ["A) Momentum", "B) Force", "C) Weight", "D) Energy"],
        correctAnswer: "C",
        explanation: "Weight is the gravitational force acting on a body, calculated as the product of mass and acceleration due to gravity."
    },
    {
        question: "Which of these waves can be polarized?",
        options: ["A) Sound waves", "B) Light waves", "C) Water waves", "D) All of these"],
        correctAnswer: "B",
        explanation: "Only transverse waves like light can be polarized, as polarization involves restricting vibrations to one plane."
    },
    {
        question: "The reciprocal of resistance is called:",
        options: ["A) Conductance", "B) conductivity", "C) Reactance", "D) Capacitance"],
        correctAnswer: "A",
        explanation: "Conductance, measured in siemens (S), is the reciprocal of resistance and indicates how easily current flows."
    },
    {
        question: "In a projectile motion, which quantity remains constant (ignoring air resistance)?",
        options: ["A) Vertical velocity", "B) Horizontal velocity", "C) Total velocity", "D) Acceleration"],
        correctAnswer: "B",
        explanation: "In projectile motion, horizontal velocity remains constant as there is no horizontal acceleration (ignoring air resistance)."
    },
    {
        question: "The speed of sound is maximum in:",
        options: ["A) Air", "B) Water", "C) Steel", "D) Vacuum"],
        correctAnswer: "C",
        explanation: "Sound waves travel fastest through solids (like steel) due to closer molecular spacing and stronger intermolecular forces."
    },
    {
        question: "Which law states that total energy remains constant in an isolated system?",
        options: ["A) First law of thermodynamics", "B) Second law of thermodynamics", "C) Law of conservation of energy", "D) Both A and C"],
        correctAnswer: "D",
        explanation: "The first law of thermodynamics is a statement of the law of conservation of energy, stating that energy cannot be created or destroyed."
    },
    {
        question: "The time taken by light to travel from Sun to Earth is approximately:",
        options: ["A) 4 minutes", "B) 8 minutes", "C) 12 minutes", "D) 16 minutes"],
        correctAnswer: "B",
        explanation: "Light takes approximately 8 minutes and 20 seconds to travel from the Sun to Earth at a speed of 3×10⁸ m/s."
    },
    {
        question: "Which of these is a dimensionless quantity?",
        options: ["A) Strain", "B) Stress", "C) Force", "D) Pressure"],
        correctAnswer: "A",
        explanation: "Strain, being the ratio of change in dimension to original dimension, has no units and is dimensionless."
    },
    {
        question: "The process of combining two or more waves is called:",
        options: ["A) Interference", "B) Diffraction", "C) Superposition", "D) Reflection"],
        correctAnswer: "C",
        explanation: "The principle of superposition describes how waves combine when they overlap, resulting in interference patterns."
    },
    {
        question: "What is the minimum number of thermodynamic processes needed to create a heat engine cycle?",
        options: ["A) Two", "B) Three", "C) Four", "D) Five"],
        correctAnswer: "B",
        explanation: "A heat engine cycle requires at least three processes to form a closed cycle and produce net work."
    },
    {
        question: "The astronomical unit (AU) is the average distance between:",
        options: ["A) Earth and Moon", "B) Earth and Sun", "C) Mars and Sun", "D) Jupiter and Sun"],
        correctAnswer: "B",
        explanation: "One AU is the average distance between Earth and Sun, approximately 149.6 million kilometers."
    },
    {
        question: "Which of these particles is its own antiparticle?",
        options: ["A) Electron", "B) Proton", "B) Photon", "C) Neutron"],
        correctAnswer: "C",
        explanation: "The photon is its own antiparticle, meaning it is its own antimatter counterpart."
    },
    {
        question: "The work done in moving a charge in an electric field depends on:",
        options: ["A) Only the initial point", "B) Only the final point", "C) Both initial and final points", "D) Path taken between points"],
        correctAnswer: "C",
        explanation: "In an electric field, work done depends only on the initial and final positions, not on the path taken (conservative field)."
    },
    {
        question: "What happens to the resistance of a semiconductor when temperature increases?",
        options: ["A) Increases", "B) Decreases", "C) Remains constant", "D) Becomes infinite"],
        correctAnswer: "B",
        explanation: "Unlike metals, semiconductors' resistance decreases with increasing temperature as more electrons become available for conduction."
    },
    {
        question: "The magnitude of induced EMF depends on:",
        options: ["A) Rate of change of magnetic flux", "B) Amount of magnetic flux", "C) Direction of magnetic field", "D) Strength of magnetic field"],
        correctAnswer: "A",
        explanation: "According to Faraday's law, the induced EMF is proportional to the rate of change of magnetic flux through the circuit."
    },
    {
        question: "What type of energy transformation occurs in a hydroelectric power plant?",
        options: [
            "A) Chemical to Electrical",
            "B) Potential to Electrical",
            "C) Nuclear to Electrical",
            "D) Thermal to Electrical"
        ],
        correctAnswer: "B",
        explanation: "Hydroelectric plants convert gravitational potential energy of stored water to electrical energy through turbines and generators."
    },
    {
        question: "The acceleration of a freely falling body:",
        options: [
            "A) Increases with height",
            "B) Decreases with height",
            "C) Remains constant",
            "D) Depends on mass"
        ],
        correctAnswer: "B",
        explanation: "Acceleration due to gravity decreases with increasing height above Earth's surface according to the inverse square law."
    },
    {
        question: "In an LCR circuit, resonance occurs when:",
        options: [
            "A) Inductive reactance equals capacitive reactance",
            "B) Current leads voltage",
            "C) Voltage leads current",
            "D) Resistance is maximum"
        ],
        correctAnswer: "A",
        explanation: "Resonance occurs when XL = XC, causing the circuit to have purely resistive impedance."
    },
    {
        question: "The wavelength of X-rays is of the order of:",
        options: [
            "A) 10⁻³ m",
            "B) 10⁻⁶ m",
            "C) 10⁻¹⁰ m",
            "D) 10⁻¹² m"
        ],
        correctAnswer: "C",
        explanation: "X-rays typically have wavelengths in the range of 0.01 to 10 nanometers (10⁻¹¹ to 10⁻⁸ m)."
    },
    {
        question: "Which of these is an intensive property?",
        options: [
            "A) Mass",
            "B) Volume",
            "C) Density",
            "D) Energy"
        ],
        correctAnswer: "C",
        explanation: "Density is an intensive property as it doesn't depend on the amount of substance present."
    },
    {
        question: "The splitting of white light into its components by a prism occurs due to:",
        options: [
            "A) Different speeds of different colors",
            "B) Different wavelengths of different colors",
            "C) Different frequencies of different colors",
            "D) Different amplitudes of different colors"
        ],
        correctAnswer: "A",
        explanation: "Different colors travel at different speeds in the prism medium, causing them to bend at different angles."
    },
    {
        question: "The electric field inside a conductor is:",
        options: [
            "A) Maximum",
            "B) Minimum",
            "C) Zero",
            "D) Infinite"
        ],
        correctAnswer: "C",
        explanation: "In electrostatic equilibrium, the electric field inside a conductor is zero as charges reside on the surface."
    },
    {
        question: "What is the SI unit of solid angle?",
        options: [
            "A) Radian",
            "B) Steradian",
            "C) Degree",
            "D) Grade"
        ],
        correctAnswer: "B",
        explanation: "The steradian (sr) is the SI unit of solid angle, measuring three-dimensional angles."
    },
    {
        question: "The momentum of a photon is:",
        options: [
            "A) hλ",
            "B) h/λ",
            "C) hf",
            "D) h/f"
        ],
        correctAnswer: "B",
        explanation: "The momentum of a photon is given by Planck's constant (h) divided by its wavelength (λ)."
    },
    {
        question: "Which of these is not a quantum number?",
        options: [
            "A) Principal quantum number",
            "B) Azimuthal quantum number",
            "C) Magnetic quantum number",
            "D) Electric quantum number"
        ],
        correctAnswer: "D",
        explanation: "The electric quantum number doesn't exist. The four quantum numbers are principal, azimuthal, magnetic, and spin."
    },
    {
        question: "The mass of a body is maximum:",
        options: [
            "A) At poles",
            "B) At equator",
            "C) At sea level",
            "D) Is same everywhere"
        ],
        correctAnswer: "D",
        explanation: "Mass is an intrinsic property and remains constant regardless of location, unlike weight."
    },
    {
        question: "A paramagnetic material has:",
        options: [
            "A) Large negative susceptibility",
            "B) Small positive susceptibility",
            "C) Zero susceptibility",
            "D) Infinite susceptibility"
        ],
        correctAnswer: "B",
        explanation: "Paramagnetic materials have small positive magnetic susceptibility and are weakly attracted to magnetic fields."
    },
    {
        question: "The refractive index of a medium is related to the:",
        options: [
            "A) Speed of sound in the medium",
            "B) Speed of light in the medium",
            "C) Density of the medium",
            "D) Temperature of the medium"
        ],
        correctAnswer: "B",
        explanation: "Refractive index is the ratio of speed of light in vacuum to speed of light in the medium."
    },
    {
        question: "Which principle states that no two electrons can have the same set of quantum numbers?",
        options: [
            "A) Heisenberg's principle",
            "B) Pauli's exclusion principle",
            "C) Bohr's principle",
            "D) Hund's rule"
        ],
        correctAnswer: "B",
        explanation: "Pauli's exclusion principle states that no two electrons in an atom can have identical sets of quantum numbers."
    },
    {
        question: "In an isothermal process:",
        options: [
            "A) Pressure remains constant",
            "B) Volume remains constant",
            "C) Temperature remains constant",
            "D) Energy remains constant"
        ],
        correctAnswer: "C",
        explanation: "In an isothermal process, temperature remains constant while other parameters may change."
    },
    {
        question: "The phase difference between voltage and current in a pure capacitor is:",
        options: [
            "A) Zero",
            "B) π/2",
            "C) π",
            "D) -π/2"
        ],
        correctAnswer: "B",
        explanation: "In a pure capacitor, current leads voltage by 90 degrees or π/2 radians."
    },
    {
        question: "Which of these is measured in parsec?",
        options: [
            "A) Time",
            "B) Distance",
            "C) Velocity",
            "D) Mass"
        ],
        correctAnswer: "B",
        explanation: "Parsec is a unit of astronomical distance, equal to about 3.26 light-years."
    },
    {
        question: "The total energy of an electron in the nth orbit of hydrogen atom is:",
        options: [
            "A) Directly proportional to n",
            "B) Inversely proportional to n",
            "C) Directly proportional to n²",
            "D) Inversely proportional to n²"
        ],
        correctAnswer: "D",
        explanation: "The energy of an electron in the nth orbit is proportional to -1/n², where n is the principal quantum number."
    },
    {
        question: "Which of these remains constant during an adiabatic process?",
        options: [
            "A) Pressure",
            "B) Volume",
            "C) Temperature",
            "D) Heat"
        ],
        correctAnswer: "D",
        explanation: "In an adiabatic process, no heat is exchanged with the surroundings (Q = 0)."
    },
    {
        question: "The half-life of a radioactive element:",
        options: [
            "A) Increases with time",
            "B) Decreases with time",
            "C) Remains constant",
            "D) Depends on sample size"
        ],
        correctAnswer: "C",
        explanation: "Half-life is a constant property of a radioactive isotope, independent of time and sample size."
    },
    {
        question: "Which quantum number determines the shape of an orbital?",
        options: [
            "A) Principal",
            "B) Azimuthal",
            "C) Magnetic",
            "D) Spin"
        ],
        correctAnswer: "B",
        explanation: "The azimuthal quantum number (l) determines the shape of an electron orbital."
    },
    {
        question: "In a transformer, power loss occurs due to:",
        options: [
            "A) Hysteresis only",
            "B) Eddy currents only",
            "C) Both hysteresis and eddy currents",
            "D) Neither hysteresis nor eddy currents"
        ],
        correctAnswer: "C",
        explanation: "Both hysteresis loss and eddy current loss contribute to power loss in transformers."
    },
    {
        question: "The acceleration of a particle in SHM is maximum at:",
        options: [
            "A) Mean position",
            "B) Extreme position",
            "C) Intermediate position",
            "D) Any position"
        ],
        correctAnswer: "B",
        explanation: "In Simple Harmonic Motion, acceleration is maximum at the extreme positions where displacement is maximum."
    },
    {
        question: "Which of these is a measure of randomness?",
        options: [
            "A) Internal energy",
            "B) Enthalpy",
            "C) Entropy",
            "D) Free energy"
        ],
        correctAnswer: "C",
        explanation: "Entropy is a measure of the disorder or randomness in a thermodynamic system."
    },
    {
        question: "The nuclear force is:",
        options: [
            "A) Gravitational in nature",
            "B) Electromagnetic in nature",
            "C) Strong in nature",
            "D) Weak in nature"
        ],
        correctAnswer: "C",
        explanation: "The nuclear force is the strong force that holds nucleons (protons and neutrons) together in atomic nuclei."
    },
    {
        question: "What is the name of the hypothetical medium once thought to carry light waves?",
        options: [
            "A) Luminiferous ether",
            "B) Cosmic medium",
            "C) Dark matter",
            "D) Quantum field"
        ],
        correctAnswer: "A",
        explanation: "The luminiferous ether was a hypothetical medium thought to permeate space for light wave propagation, disproven by the Michelson-Morley experiment."
    },
    {
        question: "The dimensional formula for angular momentum is:",
        options: [
            "A) MLT⁻¹",
            "B) ML²T⁻¹",
            "C) ML²T⁻²",
            "D) MLT⁻²"
        ],
        correctAnswer: "B",
        explanation: "Angular momentum has the dimensional formula ML²T⁻¹, where M is mass, L is length, and T is time."
    },
    {
        question: "Which of these does not affect the capacitance of a parallel plate capacitor?",
        options: [
            "A) Plate area",
            "B) Plate separation",
            "C) Dielectric constant",
            "D) Applied voltage"
        ],
        correctAnswer: "D",
        explanation: "Capacitance depends only on geometric factors and dielectric properties, not on the applied voltage."
    },
    {
        question: "The phenomena of beats occurs due to:",
        options: [
            "A) Reflection of waves",
            "B) Refraction of waves",
            "C) Superposition of waves",
            "D) Diffraction of waves"
        ],
        correctAnswer: "C",
        explanation: "Beats occur due to the superposition of two waves with slightly different frequencies."
    },
    {
        question: "A body in stable equilibrium has:",
        options: [
            "A) Minimum potential energy",
            "B) Maximum potential energy",
            "C) Zero potential energy",
            "D) Infinite potential energy"
        ],
        correctAnswer: "A",
        explanation: "In stable equilibrium, a body's potential energy is at a minimum, and any displacement increases its potential energy."
    },
    {
        question: "The speed of electromagnetic waves in vacuum is:",
        options: [
            "A) Different for different wavelengths",
            "B) Different for different frequencies",
            "C) Same for all wavelengths",
            "D) Zero for some wavelengths"
        ],
        correctAnswer: "C",
        explanation: "All electromagnetic waves travel at the same speed (c = 3×10⁸ m/s) in vacuum, regardless of wavelength."
    },
    {
        question: "Which law explains the formation of rainbow?",
        options: [
            "A) Reflection only",
            "B) Refraction only",
            "C) Dispersion only",
            "D) Both refraction and dispersion"
        ],
        correctAnswer: "D",
        explanation: "Rainbows form through both refraction and dispersion of sunlight by water droplets in the atmosphere."
    },
    {
        question: "The work function of a metal is the:",
        options: [
            "A) Energy needed to excite an electron",
            "B) Energy needed to remove an electron",
            "C) Energy needed to add an electron",
            "D) Energy needed to move an electron"
        ],
        correctAnswer: "B",
        explanation: "Work function is the minimum energy required to remove an electron from a metal surface in the photoelectric effect."
    },
    {
        question: "In a nuclear reactor, the moderator is used to:",
        options: [
            "A) Speed up neutrons",
            "B) Slow down neutrons",
            "C) Absorb neutrons",
            "D) Produce neutrons"
        ],
        correctAnswer: "B",
        explanation: "A moderator slows down fast neutrons to thermal speeds, making them more effective in causing nuclear fission."
    },
    {
        question: "The velocity of sound in air increases with:",
        options: [
            "A) Decrease in temperature",
            "B) Decrease in pressure",
            "C) Increase in temperature",
            "D) Increase in density"
        ],
        correctAnswer: "C",
        explanation: "The velocity of sound in air increases with the square root of absolute temperature."
    },
    {
        question: "What is the function of a galvanometer?",
        options: [
            "A) Measures current",
            "B) Measures voltage",
            "C) Measures resistance",
            "D) Measures power"
        ],
        correctAnswer: "A",
        explanation: "A galvanometer is a sensitive instrument used to detect and measure small electric currents."
    },
    {
        question: "The ratio of specific heats (γ = Cp/Cv) is maximum for:",
        options: [
            "A) Monoatomic gas",
            "B) Diatomic gas",
            "C) Triatomic gas",
            "D) Polyatomic gas"
        ],
        correctAnswer: "A",
        explanation: "Monoatomic gases have the highest ratio of specific heats (γ = 1.67) due to having only translational degrees of freedom."
    },
    {
        question: "What is the cause of Brownian motion?",
        options: [
            "A) Gravitational force",
            "B) Electromagnetic force",
            "C) Random molecular collisions",
            "D) Nuclear force"
        ],
        correctAnswer: "C",
        explanation: "Brownian motion is caused by random collisions between particles and molecules in a fluid."
    },
    {
        question: "The resolving power of a microscope depends on:",
        options: [
            "A) Wavelength of light used",
            "B) Focal length of lens",
            "C) Size of object",
            "D) Distance of object"
        ],
        correctAnswer: "A",
        explanation: "The resolving power of a microscope is directly related to the wavelength of light used for illumination."
    },
    {
        question: "What is the SI unit of radioactivity?",
        options: [
            "A) Roentgen",
            "B) Becquerel",
            "C) Curie",
            "D) Gray"
        ],
        correctAnswer: "B",
        explanation: "The becquerel (Bq) is the SI unit of radioactivity, equal to one disintegration per second."
    },
    {
        question: "The de Broglie wavelength of a particle is inversely proportional to its:",
        options: [
            "A) Mass",
            "B) Velocity",
            "C) Momentum",
            "D) Energy"
        ],
        correctAnswer: "C",
        explanation: "The de Broglie wavelength λ = h/p, where h is Planck's constant and p is momentum."
    },
    {
        question: "Which of these is not a property of nuclear forces?",
        options: [
            "A) Short range",
            "B) Charge independent",
            "C) Long range",
            "D) Strongest known force"
        ],
        correctAnswer: "C",
        explanation: "Nuclear forces are short-range forces, acting only over distances of about 10⁻¹⁵ meters."
    },
    {
        question: "The equivalent resistance between points A and B in an infinite network of 1Ω resistors is:",
        options: [
            "A) 1/2 Ω",
            "B) 2/3 Ω",
            "C) 1 Ω",
            "D) 2 Ω"
        ],
        correctAnswer: "B",
        explanation: "Through mathematical analysis, the equivalent resistance of an infinite ladder network of 1Ω resistors converges to 2/3 Ω."
    },
    {
        question: "What is the effect of pressure on melting point?",
        options: [
            "A) Always increases",
            "B) Always decreases",
            "C) Depends on volume change during melting",
            "D) No effect"
        ],
        correctAnswer: "C",
        explanation: "The effect of pressure on melting point depends on whether the substance expands or contracts during melting."
    },
    {
        question: "The most penetrating among these radiations is:",
        options: [
            "A) Alpha particles",
            "B) Beta particles",
            "C) Gamma rays",
            "D) Neutrons"
        ],
        correctAnswer: "C",
        explanation: "Gamma rays, being electromagnetic waves of very short wavelength, have the highest penetrating power."
    },
    {
        question: "Which effect shows the wave nature of matter?",
        options: [
            "A) Photoelectric effect",
            "B) Compton effect",
            "C) Electron diffraction",
            "D) Pair production"
        ],
        correctAnswer: "C",
        explanation: "Electron diffraction demonstrates the wave nature of matter as predicted by de Broglie's hypothesis."
    },
    {
        question: "The escape velocity from Earth's surface is approximately:",
        options: [
            "A) 8 km/s",
            "B) 11.2 km/s",
            "C) 15 km/s",
            "D) 20 km/s"
        ],
        correctAnswer: "B",
        explanation: "The escape velocity from Earth's surface is 11.2 km/s, the minimum velocity needed to escape Earth's gravitational field."
    },
    {
        question: "In which process is entropy conserved?",
        options: [
            "A) Irreversible process",
            "B) Reversible process",
            "C) Adiabatic process",
            "D) Isothermal process"
        ],
        correctAnswer: "B",
        explanation: "In a reversible process, the entropy of the system remains constant if the process is also adiabatic."
    },
    {
        question: "The Brewster's angle depends on:",
        options: [
            "A) Wavelength of light",
            "B) Intensity of light",
            "C) Refractive index",
            "D) Angle of incidence"
        ],
        correctAnswer: "C",
        explanation: "Brewster's angle is determined by the refractive index of the medium and is given by tan⁻¹(n)."
    },
    {
        question: "What is the source of stellar energy?",
        options: [
            "A) Chemical reactions",
            "B) Nuclear fusion",
            "C) Nuclear fission",
            "D) Radioactive decay"
        ],
        correctAnswer: "B",
        explanation: "Stars generate energy through nuclear fusion reactions, primarily converting hydrogen to helium."
    },
    {
        question: "What is the purpose of doping a semiconductor?",
        options: [
            "A) To decrease its size",
            "B) To increase its resistance",
            "C) To modify its conductivity",
            "D) To change its color"
        ],
        correctAnswer: "C",
        explanation: "Doping introduces impurities into a semiconductor to modify its electrical conductivity by adding extra electrons or holes."
    },
    {
        question: "The electromagnetic waves with wavelength between visible and microwave region are:",
        options: [
            "A) Ultraviolet rays",
            "B) X-rays",
            "C) Infrared rays",
            "D) Gamma rays"
        ],
        correctAnswer: "C",
        explanation: "Infrared radiation has wavelengths longer than visible light but shorter than microwaves in the electromagnetic spectrum."
    },
    {
        question: "The energy bands in metals are:",
        options: [
            "A) Completely filled",
            "B) Partially filled",
            "C) Completely empty",
            "D) Non-existent"
        ],
        correctAnswer: "B",
        explanation: "In metals, the conduction band is partially filled with electrons, allowing for easy electron movement and electrical conductivity."
    },
    {
        question: "What is the primary function of a cyclotron?",
        options: [
            "A) To detect particles",
            "B) To accelerate charged particles",
            "C) To create new elements",
            "D) To measure magnetic fields"
        ],
        correctAnswer: "B",
        explanation: "A cyclotron is a particle accelerator that uses magnetic fields and oscillating electric fields to accelerate charged particles."
    },
    {
        question: "The terminal velocity of a falling body depends on:",
        options: [
            "A) Initial velocity only",
            "B) Mass only",
            "C) Air resistance and mass",
            "D) Time of fall"
        ],
        correctAnswer: "C",
        explanation: "Terminal velocity is reached when the upward air resistance equals the downward gravitational force, depending on both mass and air resistance."
    },
    {
        question: "Which quantum number determines the orientation of an orbital?",
        options: [
            "A) Principal quantum number",
            "B) Azimuthal quantum number",
            "C) Magnetic quantum number",
            "D) Spin quantum number"
        ],
        correctAnswer: "C",
        explanation: "The magnetic quantum number (m) determines the orientation of an orbital in space."
    },
    {
        question: "The process of emission of electrons from a metal surface by heat is called:",
        options: [
            "A) Photoelectric emission",
            "B) Thermionic emission",
            "C) Field emission",
            "D) Secondary emission"
        ],
        correctAnswer: "B",
        explanation: "Thermionic emission occurs when electrons gain enough thermal energy to overcome the metal's work function and escape."
    },
    {
        question: "What is the cause of optical activity in compounds?",
        options: [
            "A) Molecular mass",
            "B) Molecular asymmetry",
            "C) Molecular size",
            "D) Molecular shape"
        ],
        correctAnswer: "B",
        explanation: "Optical activity occurs due to molecular asymmetry, where molecules lack a plane of symmetry."
    },
    {
        question: "The time period of a satellite orbiting the Earth depends on:",
        options: [
            "A) Its mass",
            "B) Its velocity",
            "C) Its orbital radius",
            "D) Its acceleration"
        ],
        correctAnswer: "C",
        explanation: "The time period of a satellite depends only on its orbital radius and Earth's mass, not on the satellite's mass."
    },
    {
        question: "In which process does a gas deviate most from ideal behavior?",
        options: [
            "A) Isothermal",
            "B) Adiabatic",
            "C) Isobaric",
            "D) Isochoric"
        ],
        correctAnswer: "A",
        explanation: "Gases deviate most from ideal behavior in isothermal processes at high pressures and low temperatures."
    },
    {
        question: "The motion of a charged particle in a uniform magnetic field is:",
        options: [
            "A) Linear",
            "B) Parabolic",
            "C) Helical",
            "D) Random"
        ],
        correctAnswer: "C",
        explanation: "A charged particle moves in a helical path when its velocity has components both parallel and perpendicular to a uniform magnetic field."
    },
    {
        question: "What is the nature of image formed by total internal reflection?",
        options: [
            "A) Real and inverted",
            "B) Virtual and erect",
            "C) Real and erect",
            "D) Virtual and inverted"
        ],
        correctAnswer: "B",
        explanation: "Total internal reflection always forms a virtual and erect image, as seen in optical fibers and mirages."
    },
    {
        question: "The drift velocity of electrons in a conductor is:",
        options: [
            "A) More than thermal velocity",
            "B) Less than thermal velocity",
            "C) Equal to thermal velocity",
            "D) Zero"
        ],
        correctAnswer: "B",
        explanation: "The drift velocity of electrons (typically mm/s) is much less than their thermal velocity (typically km/s)."
    },
    {
        question: "Which of these is an example of longitudinal electromagnetic waves?",
        options: [
            "A) Radio waves",
            "B) Light waves",
            "C) X-rays",
            "D) None of these"
        ],
        correctAnswer: "D",
        explanation: "All electromagnetic waves are transverse waves; there are no longitudinal electromagnetic waves."
    },
    {
        question: "The mass defect in a nucleus is related to:",
        options: [
            "A) Atomic number",
            "B) Mass number",
            "C) Binding energy",
            "D) Decay constant"
        ],
        correctAnswer: "C",
        explanation: "Mass defect is directly related to nuclear binding energy through Einstein's mass-energy equivalence (E = mc²)."
    },
    {
        question: "What happens to the resistance of a superconductor below critical temperature?",
        options: [
            "A) Becomes very large",
            "B) Becomes zero",
            "C) Remains constant",
            "D) Becomes infinite"
        ],
        correctAnswer: "B",
        explanation: "Below the critical temperature, a superconductor's electrical resistance drops to exactly zero."
    },
    {
        question: "The energy of a photon is maximum for:",
        options: [
            "A) Infrared light",
            "B) Ultraviolet light",
            "C) Visible light",
            "D) Microwave"
        ],
        correctAnswer: "B",
        explanation: "Among these options, ultraviolet light has the highest frequency and thus the highest photon energy (E = hf)."
    },
    {
        question: "Gauge pressure is:",
        options: [
            "A) Always more than atmospheric pressure",
            "B) Always less than atmospheric pressure",
            "C) The difference from atmospheric pressure",
            "D) Independent of atmospheric pressure"
        ],
        correctAnswer: "C",
        explanation: "Gauge pressure is the pressure relative to atmospheric pressure, can be positive or negative."
    },
    {
        question: "The property of a material to regain its shape after deformation is called:",
        options: [
            "A) Plasticity",
            "B) Elasticity",
            "C) Ductility",
            "D) Malleability"
        ],
        correctAnswer: "B",
        explanation: "Elasticity is the property that allows a material to return to its original shape after the deforming force is removed."
    },
    {
        question: "What is the direction of induced current according to Lenz's law?",
        options: [
            "A) Same as change in magnetic flux",
            "B) Opposite to change in magnetic flux",
            "C) Perpendicular to magnetic flux",
            "D) Parallel to magnetic flux"
        ],
        correctAnswer: "B",
        explanation: "According to Lenz's law, induced current flows in a direction that opposes the change in magnetic flux causing it."
    },
    {
        question: "The specific heat capacity of water is maximum at:",
        options: [
            "A) 0°C",
            "B) 4°C",
            "C) 100°C",
            "D) -4°C"
        ],
        correctAnswer: "B",
        explanation: "Water has its maximum specific heat capacity at 4°C, contributing to its importance in climate regulation."
    },
    {
        question: "In an AC circuit, power factor is the:",
        options: [
            "A) Ratio of true power to apparent power",
            "B) Ratio of apparent power to true power",
            "C) Product of voltage and current",
            "D) Ratio of voltage to current"
        ],
        correctAnswer: "A",
        explanation: "Power factor is the cosine of phase angle between voltage and current, equal to the ratio of true power to apparent power."
    },
    {
        question: "The process of combining nuclei to form heavier nuclei is called:",
        options: [
            "A) Nuclear fission",
            "B) Nuclear fusion",
            "C) Alpha decay",
            "D) Beta decay"
        ],
        correctAnswer: "B",
        explanation: "Nuclear fusion is the process of combining lighter nuclei to form heavier nuclei, releasing energy in the process."
    },
    {
        question: "What is the function of a diffraction grating?",
        options: [
            "A) To polarize light",
            "B) To reflect light",
            "C) To separate wavelengths",
            "D) To absorb light"
        ],
        correctAnswer: "C",
        explanation: "A diffraction grating separates light into its component wavelengths through interference effects."
    },
    {
        question: "The gravitational field inside a hollow spherical shell is:",
        options: [
            "A) Zero everywhere",
            "B) Maximum at center",
            "C) Minimum at center",
            "D) Varies with radius"
        ],
        correctAnswer: "A",
        explanation: "The gravitational field inside a hollow spherical shell is zero everywhere due to the cancellation of forces from all parts of the shell."
    },
    {
        question: "Which of these simple machines makes work easier by changing the direction of force?",
        options: [
            "A) Lever",
            "B) Pulley",
            "C) Inclined plane",
            "D) Wheel and axle"
        ],
        correctAnswer: "B",
        explanation: "A pulley is a simple machine that makes work easier by changing the direction of force needed to lift a load."
    },
    {
        question: "The instrument used to measure atmospheric pressure is:",
        options: [
            "A) Barometer",
            "B) Manometer",
            "C) Thermometer",
            "D) Hydrometer"
        ],
        correctAnswer: "A",
        explanation: "A barometer is specifically designed to measure atmospheric pressure, commonly using mercury or aneroid mechanism."
    },
    {
        question: "What happens to the volume of water when it freezes?",
        options: [
            "A) Decreases",
            "B) Increases",
            "C) Remains the same",
            "D) First increases then decreases"
        ],
        correctAnswer: "B",
        explanation: "Water is unusual because it expands when it freezes, which is why ice floats on water."
    },
    {
        question: "Which of these is not a form of energy?",
        options: [
            "A) Chemical energy",
            "B) Heat energy",
            "C) Force energy",
            "D) Light energy"
        ],
        correctAnswer: "C",
        explanation: "Force is not a form of energy; it is a push or pull that can cause energy transfer."
    },
    {
        question: "The change of state from solid directly to gas is called:",
        options: [
            "A) Melting",
            "B) Evaporation",
            "C) Sublimation",
            "D) Condensation"
        ],
        correctAnswer: "C",
        explanation: "Sublimation is the process where a solid changes directly to gas without passing through the liquid state."
    },
    {
        question: "Which color of light is scattered most by the atmosphere?",
        options: [
            "A) Red",
            "B) Green",
            "C) Blue",
            "D) Yellow"
        ],
        correctAnswer: "C",
        explanation: "Blue light is scattered most by the atmosphere, which is why the sky appears blue during the day."
    },
    {
        question: "Heat transfer in liquids mainly occurs through:",
        options: [
            "A) Conduction",
            "B) Convection",
            "C) Radiation",
            "D) Reflection"
        ],
        correctAnswer: "B",
        explanation: "In liquids, heat is mainly transferred through convection currents where warmer fluid rises and cooler fluid sinks."
    },
    {
        question: "The mechanical advantage of a simple machine is the ratio of:",
        options: [
            "A) Work input to work output",
            "B) Load to effort",
            "C) Effort to load",
            "D) Distance moved to force applied"
        ],
        correctAnswer: "B",
        explanation: "Mechanical advantage is the ratio of load (output force) to effort (input force) in a simple machine."
    },
    {
        question: "What happens to the pressure of a fixed mass of gas if its volume is halved at constant temperature?",
        options: [
            "A) Doubles",
            "B) Halves",
            "C) Remains same",
            "D) Becomes zero"
        ],
        correctAnswer: "A",
        explanation: "According to Boyle's Law, when volume is halved at constant temperature, pressure doubles."
    },
    {
        question: "Which of these best describes the motion of molecules in a solid?",
        options: [
            "A) Random motion",
            "B) Vibrational motion",
            "C) Translational motion",
            "D) No motion"
        ],
        correctAnswer: "B",
        explanation: "In solids, molecules vibrate about fixed positions rather than moving freely as in liquids or gases."
    },
    {
        question: "A force of 10N acting on an object for 2 seconds produces:",
        options: [
            "A) Energy",
            "B) Power",
            "C) Impulse",
            "D) Momentum"
        ],
        correctAnswer: "C",
        explanation: "Force acting for a specific time produces impulse, calculated as force × time."
    },
    {
        question: "The amount of matter in an object is called its:",
        options: [
            "A) Weight",
            "B) Mass",
            "C) Density",
            "D) Volume"
        ],
        correctAnswer: "B",
        explanation: "Mass is the measure of the amount of matter in an object, and it remains constant regardless of location."
    },
    {
        question: "Which of these is responsible for echo?",
        options: [
            "A) Reflection of sound",
            "B) Refraction of sound",
            "C) Diffraction of sound",
            "D) Absorption of sound"
        ],
        correctAnswer: "A",
        explanation: "Echo is produced by reflection of sound waves from distant obstacles."
    },
    {
        question: "When light passes from air to water, it:",
        options: [
            "A) Speeds up",
            "B) Slows down",
            "C) Maintains same speed",
            "D) Stops completely"
        ],
        correctAnswer: "B",
        explanation: "Light slows down when entering water from air, causing refraction."
    },
    {
        question: "The pressure in a liquid depends on:",
        options: [
            "A) Depth only",
            "B) Density only",
            "C) Both depth and density",
            "D) Neither depth nor density"
        ],
        correctAnswer: "C",
        explanation: "Liquid pressure depends on both the depth and density of the liquid (P = hρg)."
    },
    {
        question: "Which type of energy does a moving car possess?",
        options: [
            "A) Potential energy",
            "B) Kinetic energy",
            "C) Chemical energy",
            "D) Nuclear energy"
        ],
        correctAnswer: "B",
        explanation: "A moving car has kinetic energy due to its motion."
    },
    {
        question: "The resistance of a wire depends on its:",
        options: [
            "A) Length only",
            "B) Area only",
            "C) Both length and area",
            "D) Neither length nor area"
        ],
        correctAnswer: "C",
        explanation: "The resistance of a wire is directly proportional to its length and inversely proportional to its cross-sectional area."
    },
    {
        question: "What is the function of a fuse in an electrical circuit?",
        options: [
            "A) To increase current",
            "B) To decrease current",
            "C) To protect against excess current",
            "D) To store energy"
        ],
        correctAnswer: "C",
        explanation: "A fuse protects electrical circuits by breaking the circuit when current exceeds safe levels."
    },
    {
        question: "The formation of day and night is due to:",
        options: [
            "A) Earth's revolution",
            "B) Earth's rotation",
            "C) Moon's rotation",
            "D) Sun's rotation"
        ],
        correctAnswer: "B",
        explanation: "Day and night occur due to Earth's rotation on its axis every 24 hours."
    },
    {
        question: "Which of these is a good conductor of heat?",
        options: [
            "A) Wood",
            "B) Plastic",
            "C) Copper",
            "D) Rubber"
        ],
        correctAnswer: "C",
        explanation: "Copper is a good conductor of heat due to its metallic structure and free electrons."
    },
    {
        question: "The upward force exerted by a fluid on an object is called:",
        options: [
            "A) Weight",
            "B) Thrust",
            "C) Buoyant force",
            "D) Normal force"
        ],
        correctAnswer: "C",
        explanation: "Buoyant force is the upward force exerted by fluids on immersed objects."
    },
    {
        question: "Sound waves cannot travel through:",
        options: [
            "A) Air",
            "B) Water",
            "C) Vacuum",
            "D) Metal"
        ],
        correctAnswer: "C",
        explanation: "Sound needs a medium to travel; it cannot travel through vacuum."
    },
    {
        question: "The change in velocity per unit time is called:",
        options: [
            "A) Speed",
            "B) Acceleration",
            "C) Distance",
            "D) Displacement"
        ],
        correctAnswer: "B",
        explanation: "Acceleration is the rate of change of velocity with respect to time."
    },
    {
        question: "Which mirror is used in a torch to reflect light in a particular direction?",
        options: [
            "A) Plane mirror",
            "B) Convex mirror",
            "C) Concave mirror",
            "D) None of these"
        ],
        correctAnswer: "C",
        explanation: "A concave mirror is used in torches to reflect light in a particular direction as a beam."
    },
    {
        question: "The force that opposes motion between surfaces in contact is:",
        options: [
            "A) Normal force",
            "B) Friction",
            "C) Tension",
            "D) Weight"
        ],
        correctAnswer: "B",
        explanation: "Friction is the force that opposes the relative motion between surfaces in contact."
    },
    {
        question: "In which state of matter do particles have the most energy?",
        options: ["A) Solid", "B) Liquid", "C) Gas", "D) Plasma"],
        correctAnswer: "C",
        explanation: "Among the first three states, gas particles have the most kinetic energy, allowing them to move freely and fill their container."
    },
    {
        question: "The basic unit of electric current is:",
        options: ["A) Volt", "B) Watt", "C) Ampere", "D) Ohm"],
        correctAnswer: "C",
        explanation: "The ampere (A) is the SI unit of electric current, measuring the flow of electric charge."
    },
    {
        question: "Which of these best describes potential energy?",
        options: ["A) Energy of motion", "B) Energy of position", "C) Heat energy", "D) Sound energy"],
        correctAnswer: "B",
        explanation: "Potential energy is stored energy due to an object's position or condition."
    },
    {
        question: "What happens to a metal rod when heated?",
        options: ["A) Contracts", "B) Expands", "C) No change", "D) Becomes lighter"],
        correctAnswer: "B",
        explanation: "When heated, metal expands due to increased vibration of its particles."
    },
    {
        question: "The loudness of sound depends on its:",
        options: ["A) Frequency", "B) Wavelength", "C) Amplitude", "D) Speed"],
        correctAnswer: "C",
        explanation: "The loudness of sound is determined by the amplitude of sound waves."
    },
    {
        question: "A complete circuit must have:",
        options: ["A) Only a battery", "B) Only wires", "C) Only a bulb", "D) A source, path, and load"],
        correctAnswer: "D",
        explanation: "A complete circuit needs an energy source (like a battery), conducting path (wires), and a load (like a bulb)."
    },
    {
        question: "The density of a substance is:",
        options: ["A) Mass × Volume", "B) Mass ÷ Volume", "C) Volume ÷ Mass", "D) Mass + Volume"],
        correctAnswer: "B",
        explanation: "Density is mass per unit volume, calculated by dividing mass by volume."
    },
    {
        question: "Which force keeps planets in orbit around the sun?",
        options: ["A) Magnetic force", "B) Electric force", "C) Gravitational force", "D) Nuclear force"],
        correctAnswer: "C",
        explanation: "Gravitational force keeps planets in orbit around the sun."
    },
    {
        question: "What type of energy transformation occurs in a solar cell?",
        options: ["A) Light to heat", "B) Light to electrical", "C) Heat to electrical", "D) Chemical to electrical"],
        correctAnswer: "B",
        explanation: "Solar cells convert light energy directly into electrical energy."
    },
    {
        question: "The unit of force is:",
        options: ["A) Kilogram", "B) Newton", "C) Joule", "D) Pascal"],
        correctAnswer: "B",
        explanation: "The newton (N) is the SI unit of force, equal to mass × acceleration."
    },
    {
        question: "Which of these is necessary for sound to travel?",
        options: ["A) Light", "B) Heat", "C) Medium", "D) Electricity"],
        correctAnswer: "C",
        explanation: "Sound needs a medium (solid, liquid, or gas) to travel through as it is a mechanical wave."
    },
    {
        question: "What happens to water's temperature during boiling?",
        options: ["A) Continuously increases", "B) Remains constant", "C) Continuously decreases", "D) Fluctuates randomly"],
        correctAnswer: "B",
        explanation: "Water's temperature remains constant at its boiling point (100°C at standard pressure) until all liquid becomes vapor."
    },
    {
        question: "Which property of a wave determines its color?",
        options: ["A) Amplitude", "B) Frequency", "C) Speed", "D) Direction"],
        correctAnswer: "B",
        explanation: "The frequency (or wavelength) of light determines its color."
    },
    {
        question: "The distance between two consecutive crests of a wave is its:",
        options: ["A) Amplitude", "B) Wavelength", "C) Frequency", "D) Speed"],
        correctAnswer: "B",
        explanation: "Wavelength is the distance between two consecutive crests or troughs of a wave."
    },
    {
        question: "What happens to the brightness of a star as its distance from Earth increases?",
        options: ["A) Increases", "B) Decreases", "C) Remains same", "D) Becomes zero"],
        correctAnswer: "B",
        explanation: "The apparent brightness of a star decreases as its distance from Earth increases."
    },
    {
        question: "Which instrument measures wind speed?",
        options: ["A) Barometer", "B) Anemometer", "C) Hygrometer", "D) Thermometer"],
        correctAnswer: "B",
        explanation: "An anemometer is used to measure wind speed."
    },
    {
        question: "The push or pull on an object is called:",
        options: ["A) Energy", "B) Power", "C) Force", "D) Work"],
        correctAnswer: "C",
        explanation: "Force is defined as a push or pull that can change an object's motion or shape."
    },
    {
        question: "In a series circuit, the current is:",
        options: ["A) Different at different points", "B) Same at all points", "C) Maximum at the battery", "D) Zero at the bulb"],
        correctAnswer: "B",
        explanation: "In a series circuit, the same current flows through all components."
    },
    {
        question: "Which of these is a renewable source of energy?",
        options: ["A) Coal", "B) Natural gas", "C) Solar energy", "D) Petroleum"],
        correctAnswer: "C",
        explanation: "Solar energy is renewable as it is continuously available from the sun."
    },
    {
        question: "The transfer of heat through empty space occurs by:",
        options: ["A) Conduction", "B) Convection", "C) Radiation", "D) Reflection"],
        correctAnswer: "C",
        explanation: "Radiation is the only method of heat transfer that can occur through vacuum or empty space."
    },
    {
        question: "What type of lens is used to correct near-sightedness?",
        options: ["A) Convex lens", "B) Concave lens", "C) Bifocal lens", "D) Plain lens"],
        correctAnswer: "B",
        explanation: "Concave lenses are used to correct near-sightedness (myopia) by diverging light rays."
    },
    {
        question: "The ability of a material to be drawn into wires is called:",
        options: ["A) Malleability", "B) Ductility", "C) Elasticity", "D) Plasticity"],
        correctAnswer: "B",
        explanation: "Ductility is the property that allows materials to be drawn into thin wires."
    },
    {
        question: "What happens to the pressure in a gas when its volume increases at constant temperature?",
        options: ["A) Increases", "B) Decreases", "C) Remains same", "D) Becomes zero"],
        correctAnswer: "B",
        explanation: "According to Boyle's Law, at constant temperature, pressure decreases as volume increases."
    },
    {
        question: "Which part of the electromagnetic spectrum has the lowest frequency?",
        options: ["A) Visible light", "B) Infrared", "C) Radio waves", "D) Microwaves"],
        correctAnswer: "C",
        explanation: "Radio waves have the lowest frequency in the electromagnetic spectrum."
    },
    {
        question: "The force that Earth exerts on objects is called:",
        options: ["A) Normal force", "B) Tension", "C) Weight", "D) Friction"],
        correctAnswer: "C",
        explanation: "Weight is the gravitational force exerted by Earth on objects."
    },
    {
        "question": "When ice melts, its temperature:",
        "options": ["A) Increases", "B) Decreases", "C) Remains constant at 0°C", "D) Drops below 0°C"],
        "correctAnswer": "C",
        "explanation": "During melting, ice maintains a constant temperature of 0°C until all the ice has melted."
    },
    {
        "question": "Which of these is a contact force?",
        "options": ["A) Magnetic force", "B) Gravitational force", "C) Friction", "D) Electric force"],
        "correctAnswer": "C",
        "explanation": "Friction is a contact force as it only acts when two surfaces are in direct contact."
    },
    {
        "question": "An electric bulb converts electrical energy to:",
        "options": ["A) Light energy only", "B) Heat energy only", "C) Both light and heat energy", "D) Sound energy"],
        "correctAnswer": "C",
        "explanation": "An electric bulb converts electrical energy into both light and heat energy."
    },
    {
        "question": "The SI unit of temperature is:",
        "options": ["A) Fahrenheit", "B) Celsius", "C) Kelvin", "D) Rankine"],
        "correctAnswer": "C",
        "explanation": "The Kelvin (K) is the SI unit of temperature, used in scientific measurements."
    },
    {
        "question": "What causes objects to float in water?",
        "options": ["A) Surface tension", "B) Buoyant force", "C) Gravity", "D) Air pressure"],
        "correctAnswer": "B",
        "explanation": "Objects float when the buoyant force from the water equals their weight."
    },
    {
        "question": "Which part of a thermometer responds to temperature changes?",
        "options": ["A) Glass tube", "B) Mercury/alcohol", "C) Scale", "D) Bulb"],
        "correctAnswer": "B",
        "explanation": "The mercury or alcohol in a thermometer expands or contracts with temperature changes."
    },
    {
        "question": "The number of vibrations per second is called:",
        "options": ["A) Amplitude", "B) Wavelength", "C) Frequency", "D) Time period"],
        "correctAnswer": "C",
        "explanation": "Frequency is the number of vibrations or cycles per second, measured in Hertz."
    },
    {
        "question": "A ray of light passing through the center of a lens:",
        "options": ["A) Bends away from normal", "B) Bends towards normal", "C) Passes straight through", "D) Gets reflected back"],
        "correctAnswer": "C",
        "explanation": "A ray passing through the optical center of a lens continues undeviated."
    },
    {
        "question": "Moving air has:",
        "options": ["A) Only kinetic energy", "B) Only potential energy", "C) Both kinetic and potential energy", "D) No energy"],
        "correctAnswer": "A",
        "explanation": "Moving air has kinetic energy due to its motion."
    },
    {
        "question": "Which of these is used to measure electric current?",
        "options": ["A) Voltmeter", "B) Ammeter", "C) Ohmmeter", "D) Wattmeter"],
        "correctAnswer": "B",
        "explanation": "An ammeter is used to measure electric current in a circuit."
    },
    {
        "question": "The force per unit area is called:",
        "options": ["A) Density", "B) Pressure", "C) Weight", "D) Mass"],
        "correctAnswer": "B",
        "explanation": "Pressure is defined as the force acting per unit area."
    },
    {
        "question": "Sound travels fastest in:",
        "options": ["A) Air", "B) Water", "C) Steel", "D) Vacuum"],
        "correctAnswer": "C",
        "explanation": "Sound travels fastest in solids like steel due to closer particle spacing."
    },
    {
        "question": "Which method of heat transfer requires particles?",
        "options": ["A) Conduction only", "B) Radiation only", "C) Both conduction and convection", "D) None of these"],
        "correctAnswer": "C",
        "explanation": "Both conduction and convection require particles to transfer heat, while radiation doesn't."
    },
    {
        "question": "What happens to light when it passes from water to air?",
        "options": ["A) Bends towards normal", "B) Bends away from normal", "C) Goes straight", "D) Gets absorbed"],
        "correctAnswer": "B",
        "explanation": "Light bends away from the normal when passing from a denser to a less dense medium."
    },
    {
        "question": "The rate of doing work is called:",
        "options": ["A) Force", "B) Energy", "C) Power", "D) Acceleration"],
        "correctAnswer": "C",
        "explanation": "Power is the rate at which work is done or energy is transferred."
    },
    {
        "question": "Which of these describes the distance traveled per unit time?",
        "options": ["A) Velocity", "B) Speed", "C) Acceleration", "D) Momentum"],
        "correctAnswer": "B",
        "explanation": "Speed is the distance traveled divided by time taken."
    },
    {
        "question": "What happens to water molecules during evaporation?",
        "options": ["A) Gain energy", "B) Lose energy", "C) No change in energy", "D) First gain then lose energy"],
        "correctAnswer": "A",
        "explanation": "During evaporation, water molecules gain energy to overcome intermolecular forces."
    },
    {
        "question": "In parallel circuits, the voltage across each branch is:",
        "options": ["A) Different", "B) Same", "C) Zero", "D) Double"],
        "correctAnswer": "B",
        "explanation": "In a parallel circuit, the voltage is the same across all branches."
    },
    {
        "question": "Which color of light bends least when passing through a prism?",
        "options": ["A) Violet", "B) Green", "C) Yellow", "D) Red"],
        "correctAnswer": "D",
        "explanation": "Red light has the longest wavelength and bends least when passing through a prism."
    },
    {
        "question": "The force that resists the motion of one surface over another is:",
        "options": ["A) Normal force", "B) Friction", "C) Tension", "D) Air resistance"],
        "correctAnswer": "B",
        "explanation": "Friction is the force that opposes motion between surfaces in contact."
    },
    {
        "question": "What happens to air pressure as you go higher in altitude?",
        "options": ["A) Increases", "B) Decreases", "C) Remains same", "D) Fluctuates randomly"],
        "correctAnswer": "B",
        "explanation": "Air pressure decreases as altitude increases due to fewer air molecules."
    },
    {
        "question": "Which device converts mechanical energy to electrical energy?",
        "options": ["A) Motor", "B) Battery", "C) Generator", "D) Transformer"],
        "correctAnswer": "C",
        "explanation": "A generator converts mechanical energy into electrical energy."
    },
    {
        "question": "The bouncing back of light rays from a surface is called:",
        "options": ["A) Refraction", "B) Reflection", "C) Diffraction", "D) Dispersion"],
        "correctAnswer": "B",
        "explanation": "Reflection is the bouncing back of light rays when they hit a surface."
    },
    {
        "question": "What type of energy does a stretched rubber band have?",
        "options": ["A) Kinetic energy", "B) Elastic potential energy", "C) Gravitational potential energy", "D) Chemical energy"],
        "correctAnswer": "B",
        "explanation": "A stretched rubber band has elastic potential energy stored in it."
    },
    {
        "question": "Which force always acts perpendicular to a surface?",
        "options": ["A) Friction", "B) Normal force", "C) Weight", "D) Tension"],
        "correctAnswer": "B",
        "explanation": "The normal force always acts perpendicular to the surface of contact."
    },
    {
        question: "What unit is used to measure the amount of matter in an object?",
        options: ["A) Newton", "B) Kilogram", "C) Joule", "D) Meter"],
        correctAnswer: "B",
        explanation: "The kilogram (kg) is the SI unit for measuring mass, which is the amount of matter in an object."
    },
    {
        question: "Which instrument measures relative humidity?",
        options: ["A) Barometer", "B) Hygrometer", "C) Thermometer", "D) Anemometer"],
        correctAnswer: "B",
        explanation: "A hygrometer is used to measure the amount of water vapor in the air (relative humidity)."
    },
    {
        question: "When does an object sink in water?",
        options: ["A) When its mass is greater than water", "B) When its volume is greater than water", "C) When its density is greater than water", "D) When its weight is less than water"],
        correctAnswer: "C",
        explanation: "An object sinks when its density is greater than the density of water."
    },
    {
        question: "What is the function of a switch in an electric circuit?",
        options: ["A) To store energy", "B) To measure current", "C) To control current flow", "D) To increase voltage"],
        correctAnswer: "C",
        explanation: "A switch controls the flow of current in a circuit by making or breaking the circuit."
    },
    {
        question: "Which of these is a poor conductor of heat?",
        options: ["A) Aluminum", "B) Wood", "C) Silver", "D) Copper"],
        correctAnswer: "B",
        explanation: "Wood is a poor conductor of heat (insulator) due to its molecular structure."
    },
    {
        question: "The pitch of a sound depends on its:",
        options: ["A) Amplitude", "B) Frequency", "C) Speed", "D) Wavelength"],
        correctAnswer: "B",
        explanation: "The pitch of a sound is determined by its frequency - higher frequency means higher pitch."
    },
    {
        question: "A dynamo converts:",
        options: ["A) Electrical energy to mechanical energy", "B) Mechanical energy to electrical energy", "C) Chemical energy to electrical energy", "D) Heat energy to electrical energy"],
        correctAnswer: "B",
        explanation: "A dynamo converts mechanical energy into electrical energy through electromagnetic induction."
    },
    {
        question: "What happens to the mass of water when it freezes?",
        options: ["A) Increases", "B) Decreases", "C) Stays the same", "D) Becomes zero"],
        correctAnswer: "C",
        explanation: "The mass of water remains the same when it freezes; only its volume and density change."
    },
    {
        question: "Which type of mirror is used in a car's rear-view mirror?",
        options: ["A) Concave", "B) Convex", "C) Plane", "D) Both A and B"],
        correctAnswer: "B",
        explanation: "Convex mirrors are used as rear-view mirrors because they give a wider field of view."
    },
    {
        question: "The force that keeps an object moving in a circular path is directed:",
        options: ["A) Outward from the center", "B) Toward the center", "C) Tangent to the path", "D) Opposite to motion"],
        correctAnswer: "B",
        explanation: "The centripetal force is directed toward the center of the circular path."
    },
    {
        question: "Which of these is a scalar quantity?",
        options: ["A) Force", "B) Velocity", "C) Temperature", "D) Momentum"],
        correctAnswer: "C",
        explanation: "Temperature is a scalar quantity as it has only magnitude, no direction."
    },
    {
        question: "The process by which heat travels through metals is:",
        options: ["A) Convection", "B) Radiation", "C) Conduction", "D) Evaporation"],
        correctAnswer: "C",
        explanation: "In metals, heat travels through conduction, where energy is transferred through collisions between particles."
    },
    {
        question: "What happens to the resistance of a wire if its length is doubled?",
        options: ["A) Doubles", "B) Halves", "C) Remains same", "D) Becomes zero"],
        correctAnswer: "A",
        explanation: "The resistance of a wire is directly proportional to its length; doubling length doubles resistance."
    },
    {
        question: "Light travels in:",
        options: ["A) Curved lines", "B) Straight lines", "C) Zigzag lines", "D) Circular paths"],
        correctAnswer: "B",
        explanation: "Light travels in straight lines in a uniform medium."
    },
    {
        question: "Which of these is an example of a luminous object?",
        options: ["A) Moon", "B) Mirror", "C) Sun", "D) White paper"],
        correctAnswer: "C",
        explanation: "The Sun is a luminous object as it produces its own light."
    },
    {
        question: "Work is done when:",
        options: ["A) Force is applied only", "B) Object moves only", "C) Both force is applied and object moves", "D) Object is at rest"],
        correctAnswer: "C",
        explanation: "Work is done when a force causes displacement in the direction of the force."
    },
    {
        question: "In which state do particles have the least kinetic energy?",
        options: ["A) Solid", "B) Liquid", "C) Gas", "D) Plasma"],
        correctAnswer: "A",
        explanation: "Particles in solids have the least kinetic energy, only vibrating about fixed positions."
    },
    {
        question: "What happens to the size of a shadow as an object moves closer to a light source?",
        options: ["A) Becomes smaller", "B) Becomes larger", "C) Stays the same", "D) Disappears"],
        correctAnswer: "B",
        explanation: "The shadow becomes larger as an object moves closer to the light source."
    },
    {
        question: "The speed of sound is faster in:",
        options: ["A) Hot air", "B) Cold air", "C) Both hot and cold air", "D) Neither hot nor cold air"],
        correctAnswer: "A",
        explanation: "Sound travels faster in hot air because the particles have more kinetic energy."
    },
    {
        question: "Which part of an electromagnet becomes magnetized when current flows?",
        options: ["A) Copper wire", "B) Iron core", "C) Insulation", "D) Battery"],
        correctAnswer: "B",
        explanation: "The iron core becomes magnetized when current flows through the coil of wire around it."
    },
    {
        question: "A ball thrown upward has zero velocity at:",
        options: ["A) Starting point", "B) Middle point", "C) Highest point", "D) Ending point"],
        correctAnswer: "C",
        explanation: "At the highest point, the ball momentarily stops before falling back, having zero velocity."
    },
    {
        question: "Energy cannot be:",
        options: ["A) Created", "B) Transferred", "C) Transformed", "D) Both A and destroyed"],
        correctAnswer: "D",
        explanation: "According to the law of conservation of energy, energy cannot be created or destroyed, only transformed."
    },
    {
        question: "The image formed by a pinhole camera is:",
        options: ["A) Real and erect", "B) Real and inverted", "C) Virtual and erect", "D) Virtual and inverted"],
        correctAnswer: "B",
        explanation: "A pinhole camera forms a real and inverted image of objects."
    },
    {
        question: "Materials that allow electric current to flow through them easily are called:",
        options: ["A) Insulators", "B) Conductors", "C) Semiconductors", "D) Resistors"],
        correctAnswer: "B",
        explanation: "Conductors allow electric current to flow easily through them due to free electrons."
    },
    {
        question: "The density of water is highest at:",
        options: ["A) 0°C", "B) 4°C", "C) 100°C", "D) -4°C"],
        correctAnswer: "B",
        explanation: "Water has its maximum density at 4°C, which is why ice floats on water."
    },
    {
        question: "A pulley is used to:",
        options: ["A) Increase speed", "B) Change direction of force", "C) Generate electricity", "D) Measure force"],
        correctAnswer: "B",
        explanation: "A pulley is a simple machine that changes the direction of force, making it easier to lift loads."
    },
    {
        question: "During evaporation, a liquid changes to:",
        options: ["A) Solid", "B) Gas", "C) Plasma", "D) Another liquid"],
        correctAnswer: "B",
        explanation: "Evaporation is the process where a liquid changes into gas at a temperature below its boiling point."
    },
    {
        question: "The distance between a crest and the next trough of a wave is:",
        options: ["A) Wavelength", "B) Amplitude", "C) Half wavelength", "D) Quarter wavelength"],
        correctAnswer: "C",
        explanation: "The distance from a crest to the next trough is half a wavelength."
    },
    {
        question: "Which of these would reduce friction?",
        options: ["A) Rough surface", "B) Oil", "C) Sand", "D) More weight"],
        correctAnswer: "B",
        explanation: "Oil acts as a lubricant, reducing friction between surfaces in contact."
    },
    {
        question: "A charged object attracts small pieces of paper because of:",
        options: ["A) Magnetic force", "B) Gravitational force", "C) Electrostatic force", "D) Nuclear force"],
        correctAnswer: "C",
        explanation: "A charged object attracts neutral objects like paper through electrostatic force."
    },
    {
        question: "The unit of electrical resistance is:",
        options: ["A) Ampere", "B) Volt", "C) Ohm", "D) Watt"],
        correctAnswer: "C",
        explanation: "The ohm (Ω) is the unit of electrical resistance, measuring how much a material opposes current flow."
    },
    {
        question: "An example of a musical sound is:",
        options: ["A) Thunder", "B) Explosion", "C) Guitar string vibration", "D) Car horn"],
        correctAnswer: "C",
        explanation: "A vibrating guitar string produces regular, periodic vibrations resulting in musical sound."
    },
    {
        question: "Which color of light has the most energy?",
        options: ["A) Red", "B) Green", "C) Blue", "D) Violet"],
        correctAnswer: "D",
        explanation: "Among visible light, violet has the shortest wavelength and therefore the most energy."
    },
    {
        question: "Heat can be transferred by:",
        options: ["A) Conduction only", "B) Radiation only", "C) Conduction, convection, and radiation", "D) Convection only"],
        correctAnswer: "C",
        explanation: "Heat can be transferred through three methods: conduction, convection, and radiation."
    },
    {
        question: "The electric current in a conductor is a flow of:",
        options: ["A) Protons", "B) Neutrons", "C) Electrons", "D) Atoms"],
        correctAnswer: "C",
        explanation: "Electric current in a conductor is the flow of electrons through the material."
    },
    {
        question: "An object appears red under white light because it:",
        options: ["A) Absorbs red light", "B) Reflects red light", "C) Produces red light", "D) Transmits red light"],
        correctAnswer: "B",
        explanation: "An object appears red because it reflects red light and absorbs other colors."
    },
    {
        question: "The force that Earth exerts on the Moon is:",
        options: ["A) Magnetic force", "B) Electric force", "C) Gravitational force", "D) Nuclear force"],
        correctAnswer: "C",
        explanation: "Gravitational force keeps the Moon in orbit around Earth."
    },
    {
        question: "Which of these is not affected by friction?",
        options: ["A) Speed of moving objects", "B) Temperature of objects", "C) Direction of force", "D) Mass of objects"],
        correctAnswer: "D",
        explanation: "Friction does not affect the mass of objects, which is a constant property."
    },
    {
        question: "Energy stored in a raised object is:",
        options: ["A) Kinetic energy", "B) Gravitational potential energy", "C) Chemical energy", "D) Nuclear energy"],
        correctAnswer: "B",
        explanation: "A raised object has gravitational potential energy due to its position above Earth's surface."
    },
    {
        question: "Sound waves are:",
        options: ["A) Transverse waves", "B) Longitudinal waves", "C) Electromagnetic waves", "D) Surface waves"],
        correctAnswer: "B",
        explanation: "Sound waves are longitudinal waves where particles vibrate parallel to the direction of wave travel."
    },
    {
        question: "The boiling point of water:",
        options: ["A) Increases with altitude", "B) Decreases with altitude", "C) Stays constant everywhere", "D) Is independent of altitude"],
        correctAnswer: "B",
        explanation: "Water boils at lower temperatures at higher altitudes due to lower atmospheric pressure."
    },
    {
        question: "A magnet always has:",
        options: ["A) One pole", "B) Two poles", "C) Three poles", "D) Four poles"],
        correctAnswer: "B",
        explanation: "A magnet always has two poles: north and south, even if broken into pieces."
    },
    {
        question: "The size of the image in a plane mirror is:",
        options: ["A) Larger than the object", "B) Smaller than the object", "C) Same size as the object", "D) Depends on distance"],
        correctAnswer: "C",
        explanation: "A plane mirror forms an image that is the same size as the object."
    },
    {
        question: "What happens to water's volume when heated from 0°C to 4°C?",
        options: ["A) Increases", "B) Decreases", "C) Remains same", "D) First decreases then increases"],
        correctAnswer: "B",
        explanation: "Water's volume decreases when heated from 0°C to 4°C, showing its unusual property."
    },
    {
        question: "In a series circuit, if one bulb burns out:",
        options: ["A) All bulbs go out", "B) Other bulbs become brighter", "C) Only that bulb goes out", "D) Circuit becomes hot"],
        correctAnswer: "A",
        explanation: "In a series circuit, if one bulb burns out, the circuit breaks and all bulbs go out."
    },
    {
        question: "Light years measure:",
        options: ["A) Time", "B) Distance", "C) Speed", "D) Brightness"],
        correctAnswer: "B",
        explanation: "A light year is a unit of distance, measuring how far light travels in one year."
    },
    {
        question: "Why do we see lightning before hearing thunder?",
        options: ["A) Lightning is louder", "B) Thunder is slower", "C) Light travels faster than sound", "D) Lightning happens first"],
        correctAnswer: "C",
        explanation: "Light travels much faster than sound, so we see lightning before hearing thunder."
    },
    {
        question: "When water freezes, its volume:",
        options: ["A) Increases", "B) Decreases", "C) Stays the same", "D) First increases then decreases"],
        correctAnswer: "A",
        explanation: "Water expands when it freezes, which is why ice floats on water."
    },
    {
        question: "The strength of a magnetic field is:",
        options: ["A) Same at all points", "B) Strongest at the poles", "C) Strongest at the center", "D) Independent of distance"],
        correctAnswer: "B",
        explanation: "A magnet's field is strongest at its poles where the field lines are most concentrated."
    },
    {
        question: "Which surface would reflect light best?",
        options: ["A) Black rough surface", "B) White rough surface", "C) Smooth shiny surface", "D) Dark smooth surface"],
        correctAnswer: "C",
        explanation: "A smooth, shiny surface reflects light best as it has the most regular reflection."
    },
    {
        "question": "A flexible spring stretches when:",
        "options": [
            "A) Cooled",
            "B) Heated",
            "C) Force is applied",
            "D) Placed in water"
        ],
        "correctAnswer": "C",
        "explanation": "A spring stretches when a force is applied to it, demonstrating elastic behavior."
    },
    {
        "question": "Why do we wear light-colored clothes in summer?",
        "options": [
            "A) They reflect more heat",
            "B) They absorb more heat",
            "C) They are cheaper",
            "D) They look better"
        ],
        "correctAnswer": "A",
        "explanation": "Light-colored clothes reflect more heat, helping to keep us cooler in summer."
    },
    {
        "question": "A battery provides:",
        "options": [
            "A) Current only",
            "B) Voltage only",
            "C) Both current and voltage",
            "D) Neither current nor voltage"
        ],
        "correctAnswer": "C",
        "explanation": "A battery provides both voltage (electrical pressure) and current (flow of charge) in a circuit."
    },
    {
        "question": "The process of changing water vapor to water is called:",
        "options": [
            "A) Evaporation",
            "B) Condensation",
            "C) Sublimation",
            "D) Melting"
        ],
        "correctAnswer": "B",
        "explanation": "Condensation is the process where water vapor changes into liquid water."
    },
    {
        "question": "Which of these is an insulator?",
        "options": [
            "A) Copper",
            "B) Aluminum",
            "C) Rubber",
            "D) Iron"
        ],
        "correctAnswer": "C",
        "explanation": "Rubber is an electrical insulator as it does not allow electric current to flow through it easily."
    },
    {
        "question": "A force of 1 Newton is approximately equal to the weight of:",
        "options": [
            "A) 100g mass",
            "B) 1kg mass",
            "C) 10g mass",
            "D) 1000g mass"
        ],
        "correctAnswer": "A",
        "explanation": "A force of 1 Newton is approximately equal to the weight of a 100g mass on Earth."
    },
    {
        "question": "Sound waves need a medium to travel through because they are:",
        "options": [
            "A) Very fast",
            "B) Very slow",
            "C) Mechanical waves",
            "D) Light waves"
        ],
        "correctAnswer": "C",
        "explanation": "Sound waves are mechanical waves that require a medium to transfer energy through vibrations."
    },
    {
        "question": "A concave lens always forms an image that is:",
        "options": [
            "A) Real and inverted",
            "B) Virtual and erect",
            "C) Real and erect",
            "D) Virtual and inverted"
        ],
        "correctAnswer": "B",
        "explanation": "A concave lens always forms a virtual, erect, and diminished image."
    },
    {
        "question": "Which of these is measured in meters per second?",
        "options": [
            "A) Force",
            "B) Velocity",
            "C) Acceleration",
            "D) Mass"
        ],
        "correctAnswer": "B",
        "explanation": "Velocity is measured in meters per second (m/s) as it is distance traveled per unit time."
    },
    {
        "question": "The north pole of a magnet:",
        "options": [
            "A) Attracts another north pole",
            "B) Repels another north pole",
            "C) Has no effect on another pole",
            "D) Sometimes attracts, sometimes repels"
        ],
        "correctAnswer": "B",
        "explanation": "Like poles of magnets repel each other, so two north poles repel."
    },
    {
        "question": "Water drops are spherical because of:",
        "options": [
            "A) Gravity",
            "B) Surface tension",
            "C) Pressure",
            "D) Temperature"
        ],
        "correctAnswer": "B",
        "explanation": "Surface tension causes water drops to form spherical shapes to minimize surface area."
    },
    {
        "question": "In which state of matter are particles most tightly packed?",
        "options": [
            "A) Solid",
            "B) Liquid",
            "C) Gas",
            "D) All states are same"
        ],
        "correctAnswer": "A",
        "explanation": "Particles in solids are most tightly packed, giving solids a definite shape and volume."
    },
    {
        "question": "The image formed by our eyes is:",
        "options": [
            "A) Virtual and erect",
            "B) Real and erect",
            "C) Real and inverted",
            "D) Virtual and inverted"
        ],
        "correctAnswer": "C",
        "explanation": "The eye forms a real and inverted image on the retina, which our brain interprets as upright."
    },
    {
        "question": "Which of these affects the pressure in a liquid?",
        "options": [
            "A) Surface area only",
            "B) Depth only",
            "C) Both depth and density",
            "D) Neither depth nor density"
        ],
        "correctAnswer": "C",
        "explanation": "Pressure in a liquid depends on both its depth and density (P = hρg)."
    },
    {
        "question": "A rainbow forms when:",
        "options": [
            "A) Light is absorbed by water drops",
            "B) Light is reflected by clouds",
            "C) Light is dispersed by water drops",
            "D) Light is blocked by clouds"
        ],
        "correctAnswer": "C",
        "explanation": "A rainbow forms when sunlight is dispersed into its component colors by water drops in the air."
    },
    {
        "question": "The force that makes it easier to float in salt water than fresh water is:",
        "options": [
            "A) Gravitational force",
            "B) Magnetic force",
            "C) Buoyant force",
            "D) Frictional force"
        ],
        "correctAnswer": "C",
        "explanation": "Salt water provides a greater buoyant force due to its higher density."
    },
    {
        "question": "Which type of energy does food provide to our body?",
        "options": [
            "A) Nuclear energy",
            "B) Chemical energy",
            "C) Solar energy",
            "D) Electrical energy"
        ],
        "correctAnswer": "B",
        "explanation": "Food provides chemical energy which our body converts into other forms of energy."
    },
    {
        "question": "Why does a metal spoon feel colder than a wooden spoon at the same temperature?",
        "options": [
            "A) Metal is naturally colder",
            "B) Metal conducts heat better",
            "C) Wood is warmer",
            "D) Temperature difference"
        ],
        "correctAnswer": "B",
        "explanation": "Metal conducts heat away from our hand faster than wood, making it feel colder."
    },
    {
        "question": "When light enters glass from air, its speed:",
        "options": [
            "A) Increases",
            "B) Decreases",
            "C) Remains same",
            "D) Becomes zero"
        ],
        "correctAnswer": "B",
        "explanation": "Light slows down when entering a denser medium like glass from air."
    },
    {
        "question": "The force that makes a bicycle stop when brakes are applied is:",
        "options": [
            "A) Normal force",
            "B) Friction",
            "C) Air resistance",
            "D) Tension"
        ],
        "correctAnswer": "B",
        "explanation": "Friction between the brake pads and wheel helps to stop the bicycle."
    },
    {
        "question": "Which of these is not a form of precipitation?",
        "options": [
            "A) Rain",
            "B) Snow",
            "C) Fog",
            "D) Hail"
        ],
        "correctAnswer": "C",
        "explanation": "Fog is condensation near the ground, not a form of precipitation like rain, snow, or hail."
    },
    {
        "question": "The most abundant gas in Earth's atmosphere is:",
        "options": [
            "A) Oxygen",
            "B) Carbon dioxide",
            "C) Nitrogen",
            "D) Hydrogen"
        ],
        "correctAnswer": "C",
        "explanation": "Nitrogen makes up about 78% of Earth's atmosphere."
    },
    {
        "question": "What type of mirror would you use to see a larger image of your face?",
        "options": [
            "A) Plane mirror",
            "B) Convex mirror",
            "C) Concave mirror",
            "D) Any mirror"
        ],
        "correctAnswer": "C",
        "explanation": "A concave mirror can produce a magnified image when the object is placed between the focal point and the mirror."
    },
    {
        "question": "When we measure the length of an object, we measure its:",
        "options": [
            "A) Mass",
            "B) Weight",
            "C) Volume",
            "D) Extension"
        ],
        "correctAnswer": "D",
        "explanation": "Length measurement determines the extension or distance between two points of an object."
    },
    {
        "question": "A simple pendulum swings because of:",
        "options": [
            "A) Air pressure",
            "B) Magnetic force",
            "C) Gravity",
            "D) Electric force"
        ],
        "correctAnswer": "C",
        "explanation": "The swinging motion of a pendulum is caused by gravitational force acting on the bob."
    }
];
