//! .d.ts uzantısnı typescript global alan olarak görüyor. Ve bu uzantıdaki dosyalarda tanımladığımız typelara herhangi bir export-import yapmadan erişim sağlayabiliyoruz.


// typescript js nin süper setidir. Yani browserlar tarafindan islenemez o nedenle compile a ihtiyaci vardir. Ts ile yazilan kodlar js e dönüstürülür. Js de dönüstürülürken typescripte özgü yapilar js kodunda karsiligi olmadigi icin dönüstürülemezler ve böylelikle production ortaminda

type AddFn = (text:string)=> Promise <void>

interface ITodoType {
  task:string;
  isDone:boolean;
  id:string | number;
}