---
title: Basics of Electronics
---

## Bipolar Junction Transistor

BJTs are used for two reasons:

1. Amplification (The Active Region)
2. Switching (Saturation and Cut-Off Region)

It is current controlled


> Transistors which use electrons as majority charge carriers are more common - NPN BJT and N-Channel MOSFET. This is
> because electrons have higher mobility than holes, making these transistors faster.

|   Terminal    |   Size    |  Doping  |
|:-------------:|:---------:|:--------:|
|  Emitter (E)  |  Medium   |  Heavy   |
|   Base (B)    | Very Thin |  Light   |
| Collector (C) |   Large   | Moderate |

### BJT Configurations

For an amplifier, we need 2 input wires which feed the signal in and 2 output wires which give the output signal.
But a BJT has 3 terminals, so 1 terminal must act as 2. We usually choose one of the leg common to both input and
output,
and it generally acts as ground for both input and output.

#### Common Emitter (CE) - The Most Used One

We connect the emitter to the ground and feed the weak signal into the base. The amplified output comes from the
Collector.

Facts:

1. Almost all general purpose amplifiers are made using CE configuration.
2. It flips the signal upside down (180-degree phase shift).
3. It also has high voltage gain and current gain

### Common Collector (CC) - Used as Buffer

The collector is connected to ground. You feed the input signal into the Base and pull out the output from the Emitter.
Because the output follows whatever the emitter does, its called **Emitter Follower**.

Facts:

1. It does not amplify voltage but amplifies current by a lot
2. It is used for high current consuming electronics like motors from a weak signal

### Common Base (CB) - Opposite of CC

Input is fed into the emitter and the output is pulled from collector.

Facts:

1. Its complete opposite of CC. It amplifies voltage but does not amplify current. (Current gain is less than 1)
2. It has very low resistance, so its used for high frequency applications.
3. These are used in RF antennas, radar systems and high speed microphone pre-amps

| Configuration         | Shared Leg | Voltage Gain? | Current Gain? | Phase Shift    | Best Real-Life Use Case                        |
|-----------------------|------------|---------------|---------------|----------------|------------------------------------------------|
| Common Emitter (CE)   | Emitter    | YES (High)    | YES (High)    | 180° (Flipped) | General amplifiers, Audio (Maximum Power gain) |
| Common Collector (CC) | Collector  | NO (~1)       | YES (High)    | 0° (In-phase)  | Impedance matching, Buffering weak signals     |
| Common Base (CB)      | Base       | YES (High)    | NO (<1)       | 0° (In-phase)  | High-frequency RF circuits, Antennas           |

| Configuration    | Current Gain Symbol                        | The Math Ratio      | Typical Value | What it means physically                                                                    |
|------------------|--------------------------------------------|---------------------|---------------|---------------------------------------------------------------------------------------------|
| Common Base      | Current Gain (α)  - Current Transfer Ratio | α=$\frac{I_C}{I_E}$ | 0.95 to 0.99  | Slightly less than 1. You lose a tiny bit of current to the Base.                           |
| Common Emitter   | Current Gain (β)  - Amplification factor   | β=$\frac{I_C}{I_B}$ | 50 to 500     | The Amplification Factor! 1mA into the base gives you 100mA out the collector.              |
| Common Collector | Current Gain (γ)  - Emitter Follower Gain  | γ=$\frac{I_E}{I_B}$ | β+1           | Very high current gain, slightly higher than Beta because it includes the base current too. |