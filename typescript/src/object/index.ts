const objectA: {
  chaveA:string,
  chaveB:string,
  chaveC:string,
    //usando index signature
    [key:string]:unknown;
}= {
  chaveA:'Valor A',
  chaveB:'Valor B',
  chaveC:'Valor C',
}

objectA.chaveA = 'Outro valor'
