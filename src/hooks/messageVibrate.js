export default function vibrateMessage() {
    document.getElementById("test").animate([
        { transform: 'translateY(10px)' },
        { transform: 'translateY(-10px)' }
      ], {
        duration: 1,
      });
}