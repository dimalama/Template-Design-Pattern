abstract class Pdf {
  protected abstract drawHeader(): void;
  protected abstract drawBody(): void;
  protected abstract drawFooter(): void;

  public createPdf() {
    this.drawHeader();
    this.drawBody();
    this.drawFooter();
  }
}

class InvoicePdf extends Pdf {
  protected drawHeader() {
    console.log("Drawing an invoice header");
  }
  protected drawBody() {
    console.log("Drawing an invoice body");
  }
  protected drawFooter() {
    console.log("Drawing an invoice footer");
  }
}

class ContractPdf extends Pdf {
  protected drawHeader() {
    console.log("Drawing a contract header");
  }
  protected drawBody() {
    console.log("Drawing a contract body");
  }
  protected drawFooter() {
    console.log("Drawing a contract footer");
  }
}

class Printer {
  public printPdf(p: Pdf) {
    p.createPdf();
  }
}

const invoice = new InvoicePdf();
const contract = new ContractPdf();

const printer = new Printer();

console.log("Printing....")
printer.printPdf(invoice);

console.log("Printing....")
printer.printPdf(contract);