export const cardRegex = {
  visa: new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/),
  mastercard: new RegExp(/^5[1-5][0-9]{14}$/),
  amex: new RegExp(/^3[47][0-9]{13}$/),
  diners: new RegExp(/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/),
  hipercard: new RegExp(/^(606282d{10}(d{3})?)|(3841d{15})$/),
  elo: new RegExp(
    /^((((636368)|(438935)|(504175)|(451416)|(636297))d{0,10})|((5067)|(4576)|(4011))d{0,12})$/
  ),
};
