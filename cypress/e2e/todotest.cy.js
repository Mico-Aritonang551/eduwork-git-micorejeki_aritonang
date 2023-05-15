/// <reference types="cypress"/>

import { login } from './loginweb.cy.js';

describe('Should Add item to cart', { testIsolation: false }, () => {
  it('Should add all items to cart', () => {
    let numItems = 0;//variabel untuk menyimpan jumlah item yang di tambahkan kedalam keranjang
    cy.get('.btn_inventory').each(($btn_add) => { //mencari semua elemen HTML yang memiliki kelas "btn_inventory", dan kemudian menjalankan fungsi yang diberikan untuk setiap elemen
      cy.wrap($btn_add).click(); //wrap untuk membungkus elemen $btn_add
      numItems++;
    }).then(() => {
      cy.get('.shopping_cart_link').should('have.text', numItems.toString());
    });
  });
});

describe('Should Product shorting test', { testIsolation: false }, () => {
  it('Should short product by asc', () => {
    cy.get('.product_sort_container').select('az')
    cy.get('.inventory_item_name').then(($items) => {
      const itemNames = $items.toArray().map((item) => item.innerText.toUpperCase());
      const sortedNames = [...itemNames].sort();
      expect(itemNames).to.deep.equal(sortedNames);
    })
  })

  it('Should short product by desc', () => {
    cy.get('.product_sort_container').select('za')
    cy.get('.inventory_item_name').then(($items) => {
      const itemNames = $items.toArray().map((item) => item.innerText.toLowerCase());
      const sortedNames = [...itemNames].sort().reverse();
      expect(itemNames).to.deep.equal(sortedNames);
    })
  })

  it('Should short price by asc', () => {
    cy.get('.product_sort_container').select('lohi')
    cy.get('.inventory_item_name').then(($items) => {
      const numbers = $items.toArray().map((item) => Number(item.innerText));
      const sortedNumbers = [...numbers].sort((a, b) => a - b);
      expect(numbers).to.deep.equal(sortedNumbers);
    })
  })

  it('Should short price by desc', () => {
    cy.get('.product_sort_container').select('hilo')
    cy.get('.inventory_item_name').then(($items) => {
      const numbers = $items.toArray().map((item) => Number(item.innerText));
      const sortedNumbers = [...numbers].sort((a, b) => b - a);
      expect(numbers).to.deep.equal(sortedNumbers);
    })
  })
})

describe('Should item at cart', { testIsolation: false }, () => {
  it('Should item in cart', () => {
    cy.get('#shopping_cart_container').should('be.visible').click()
  })
  it('Should delete item/product', () => {
    //pastikan keranjang tidak kosong
    cy.get('.cart_item').should('have.length.gt', 0)//have.lenght digunakan untuk memeriksa apakah elemen memiliki panjang > dari gt (greater than (lebih besar dari))

    //hitung jumlah produk di keranjang
    cy.get('.cart_item').its('length').then((jumlahproduksebelum) => {
      const indeks = Math.floor(Math.random() * jumlahproduksebelum)//Math.random() dan Math.floor() digunakan untuk mendapatkan indeks acak atau produk acak yang dihapus

      //melakukan penghapusan produk dari keranjang
      cy.get('.cart_item').eq(indeks).contains('Remove').click()

      //pastikan kalau produk berhasil di hapus
      cy.get('.cart_item').should('have.length', jumlahproduksebelum - 1)
    })
  })
})

describe('Should checkout product/item', { testIsolation: false }, () => {
  // it('Should to checkout product/item', () => {
  //   cy.fixture('userCheckout').then(userCheckout => {
  //     cy.get('#checkout').click()
  //     const firstName = userCheckout.firstName
  //     const lastName = userCheckout.lastName
  //     const postalCode = userCheckout.postalCode
  //     cy.Checkout(firstName, lastName, postalCode)
  //   })
  // })

  it('Should to checkout product/item', () => {
    cy.get('#checkout').click()

    const firstName = 'Mico'
    const lastName = 'aritonang'
    const postalCode = '20114'

    cy.get('#first-name').type(firstName).should('have.value', firstName)
    cy.get('#last-name').type(lastName).should('have.value', lastName)
    cy.get('#postal-code').type(postalCode).should('have.value', postalCode)

  })
  it('Should finish checkout', () => {
    cy.get('[data-test="continue"]').should('be.visible').click()
    cy.get('#finish').click()
    cy.get('[data-test="back-to-products"]').click()
  })

  it('Should logout from home page', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.contains('Logout').click()
  })
})
