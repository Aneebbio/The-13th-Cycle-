export const power_cable_copper = {
    id: "power_cable_copper",
    label: "Copper Power Cable",
    type: "connection",
    requires: { item: "copper_wire", quantity: 2, item2: "rubber", quantity2: 1 },
    transfer_rate: 500, // Max Watts per tick
    desc: "Standard insulated cabling for low-to-mid power distribution."
};
