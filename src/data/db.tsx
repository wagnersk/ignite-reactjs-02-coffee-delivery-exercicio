import expresso from '../assets/Expresso.png'
import americano from '../assets/Americano.png'
import cremoso from '../assets/ExpressoCremoso.png'
import cafeGelado from '../assets/CafeGelado.png'

import cafeComLeite from '../assets/CafeComLeite.png'
import latte from '../assets/Latte.png'
import capuccino from '../assets/Capuccino.png'
import macchiato from '../assets/Macchiato.png'

import mochaccino from '../assets/Mochaccino.png'
import chocolateQuente from '../assets/ChocolateQuente.png'
import cubano from '../assets/Cubano.png'
import havaiano from '../assets/Havaiano.png'

import arabe from '../assets/Arabe.png'
import irlandes from '../assets/Irlandes.png'

export const data = [
  {
    /*  id: 0, */
    type: ['TRADICIONAL'],
    coffeeName: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    photo: expresso,
    /* quantity: 0, */
  },
  {
    /*   id: 1, */
    type: ['TRADICIONAL'],
    coffeeName: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    photo: americano,
    /* quantity: 0, */
  },
  {
    /*    id: 2, */
    type: ['TRADICIONAL'],
    coffeeName: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    photo: cremoso,
    /* quantity: 0, */
  },
  {
    /*     id: 3, */
    type: ['TRADICIONAL', 'GELADO'],
    coffeeName: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    photo: cafeGelado,
    /* quantity: 0, */
  },
  {
    /*     id: 4, */
    type: ['TRADICIONAL', 'COM LEITE'],
    coffeeName: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    photo: cafeComLeite,
    /* quantity: 0, */
  },
  {
    /*     id: 5, */
    type: ['TRADICIONAL', 'COM LEITE'],
    coffeeName: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    photo: latte,
    /* quantity: 0, */
  },
  {
    /*    id: 6, */
    type: ['TRADICIONAL', 'COM LEITE'],
    coffeeName: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    photo: capuccino,
    /* quantity: 0, */
  },
  {
    /*    id: 7, */
    type: ['TRADICIONAL', 'COM LEITE'],
    coffeeName: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    photo: macchiato,
    /* quantity: 0, */
  },
  {
    /*     id: 8, */
    type: ['TRADICIONAL', 'COM LEITE'],
    coffeeName: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    photo: mochaccino,
    /* quantity: 0, */
  },
  {
    /*     id: 9, */
    type: ['ESPECIAL', 'COM LEITE'],
    coffeeName: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    photo: chocolateQuente,
    /* quantity: 0, */
  },
  {
    /*  id: 10, */
    type: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    coffeeName: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    photo: cubano,
    /* quantity: 0, */
  },
  {
    /*   id: 11, */
    type: ['ESPECIAL'],
    coffeeName: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    photo: havaiano,
    /* quantity: 0, */
  },
  {
    /*     id: 12, */
    type: ['ESPECIAL'],
    coffeeName: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    photo: arabe,
    /* quantity: 0, */
  },
  {
    /*   id: 13, */
    type: ['ESPECIAL', 'ALCOÓLICO'],
    coffeeName: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    photo: irlandes,
    /* quantity: 0, */
  },
]
