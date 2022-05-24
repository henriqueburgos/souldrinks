import { TestBed } from '@angular/core/testing';
import { DrinkService } from 'src/app/shared/services/drink-service/drink-service.service';

describe('DrinkserviceService', () => {
  let service: DrinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
