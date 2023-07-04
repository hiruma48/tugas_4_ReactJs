import React, { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component{
    constructor(props){
        super(props);
        this.state={
            pesan:"",
            jumlah:""
        }
        this.pilihpesanan=this.pilihpesanan.bind(this);
        this.nasipadang=this.nasipadang.bind(this);
        this.sate=this.sate.bind(this);
        this.soto=this.soto.bind(this);
        this.uduk=this.uduk.bind(this);
        this.kuning=this.kuning.bind(this);
        this.batal=this.batal.bind(this);
    }
    pilihpesanan(value,e){
        this.setState({[value]:e.taget.value , tampil:true});
    }
    nasipadang(){
        this.setState({
            pesan:"nasi padang",
            jumlah:this.state.jumlah + 1,
            tampil:true
        });
    }
    sate(){
        this.setState({
            pesan:"sate",
            jumlah:this.state.jumlah + 1,
            tampil:true
        })
    }
    soto(){
        this.setState({
            pesan:"soto ayam lamongan",
            jumlah:this.state.jumlah + 1,
            tampil:true
        })
    }
    uduk(){
        this.setState({
            pesan:"nasi uduk",
            jumlah:this.state.jumlah + 1,
            tampil:true
        })
    }
    kuning(){
        this.setState({
            pesan:"kuning",
            jumlah:this.state.jumlah + 1,
            tampil:true
        })
    }
    batal(){
        this.setState({
            pesan:"",
            jumlah: 0,
            tampil:false
        })
    }
    render(){
        return(
            <div>
                <h3>Daftar Makanan yang kami sediakan: </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" lebar="400"/>
                                <center>
                                    <button onClick={this.nasipadang}>pesan sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" lebar="400"/>
                                <center>
                                    <button onClick={this.sate}>pesan sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" lebar="400"/>
                                <center>
                                    <button onClick={this.soto}>pesan sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan datalist="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png

" lebar="400"/>
                                <center>
                                    <button onClick={this.uduk}>pesan sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan datalist="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg " lebar="400"/>
                                <center>
                                    <button onClick={this.kuning}>pesan sekarang</button>
                                </center>
                            </td>  
                        </tr>
                    </tbody>
                </table>
                <br/>
                <input
                type="text"
                value={this.state.pesan}
                placeholder="Masukan pesanan anda"
                onChange={e=>this.pilihpesanan("pesan",e)}
                />
                <input
                type="number"
                value={this.state.jumlah}
                placeholder="jumlah pesanan"
                onChange={(e=>this.pilihpesanan("jumlah",e))}
                />
                <button onClick={this.batal}>batal semua pesanan</button>
                {this.state.tampil === true ?(
                    <div>
                        <h3>pesanan anda:{this.state.pesan}</h3>
                        <h4>jumlah pesanan:{this.state.jumlah}</h4>
                    </div>
                ):(
                    <h1>
                        <center>anda belum memesan</center>
                    </h1>
                )}
            </div>
        )
    }
}

export default MenuMakanan;