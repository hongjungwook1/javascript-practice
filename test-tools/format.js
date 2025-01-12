module.exports = function format(date) {
  const localDate = date.toLocaleDateString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit'}).split( '/' ).reverse( ).join( '-' );
  const localTime = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  return localDate + ' ' + localTime + `.${('00' + date.getMilliseconds()).slice(-3)}`;
}