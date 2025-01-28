export function clearCache() {
    localStorage.removeItem('auth');
    localStorage.removeItem('offer-sent');
}