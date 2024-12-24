/**
 * Formatea un número como divisa en pesos chilenos (CLP)
 * @param {number} amount - El monto a formatear
 * @returns {string} - El monto formateado como CLP
 */
export const formatPriceCLP = (amount) => {
    return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0, 
    }).format(amount);
};

/**
 * Formatea un número como divisa en dolares Norteamericanos (USD)
 * @param {number} amount - El monto a formatear
 * @returns {string} - El monto formateado como usd
 */
export const formatPriceUSD = (amount) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2, 
    }).format(amount);
};