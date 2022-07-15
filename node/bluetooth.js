'use strict'
const ipc = require('../ipc')
const { EventEmitter } = require('./events')

let isInitialized = false

class Bluetooth extends EventEmitter {
  constructor (uuid) {
    if (!isInitialized) {
      window.external.invoke(`ipc://bluetooth-subscribe?uuid=${uuid}`)
    }

    window.addEventListener('data', e => {
      if (e.detail.params.source === 'bluetooth') {
        this.emit('data', e.detail.data)
      }
    })
  }

  advertise (data) {
    if (typeof data === 'string') {
      data = new TextEncoder().encode(data).data
    }
    return ipc.send('bluetooth-advertise', params, data)
  }
}

exports.Bluetooth = Bluetooth
