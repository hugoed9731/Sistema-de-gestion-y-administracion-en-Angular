import { Component, OnInit } from '@angular/core';
import { PaseadorModel } from '../../../models/paseador.model';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthUService } from '../../../services/auth-u.service';

@Component({
  selector: 'app-det-pasead',
  templateUrl: './det-pasead.component.html',
  styleUrls: ['./det-pasead.component.scss']
})
export class DetPaseadComponent implements OnInit {

  paseador: PaseadorModel = new PaseadorModel();

  constructor(private authService: AuthUService, private route: ActivatedRoute) { }

  ngOnInit() {

    const uid = this.route.snapshot.paramMap.get('uid');

    if (uid !== 'nuevo') {

      this.authService.getPaseador( uid).subscribe( (resp: PaseadorModel) => {
        this.paseador = resp;
        this.paseador.uid = uid;
      });
    }
  }
  }


