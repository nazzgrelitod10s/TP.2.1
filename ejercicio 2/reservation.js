// Clase Customer para representar un cliente
class Customer {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    //Info para obtener información del cliente
    get info() {
        return `${this.name} - ${this.email}`;
    }
}

// Clase Reservation para representar una reserva
class Reservation {
    constructor(id, customer, date, guests) {
        this.id = id;
        this.customer = customer;
        this.date = new Date(date); // Convertimos la fecha a objeto Date
        this.guests = guests;
    }

    //Info para obtener información de la reserva
    get info() {
        return `Fecha y hora: ${this.date.toLocaleString()}, Cliente: ${this.customer.info}, Comensales: ${this.guests}`;
    }

    // Método estático para validar una reserva
    static validateReservation(reservationInfo) {
        const { date, guests } = reservationInfo;

        // Convertimos la fecha de reserva a objeto Date
        const reservationDate = new Date(date);

        // Obtenemos la fecha y hora actual
        const currentDate = new Date();

        // Validamos la reserva
        if (reservationDate < currentDate || guests <= 0) {
            return false;
        }

        return true;
    }
}


