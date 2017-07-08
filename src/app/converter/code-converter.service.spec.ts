import { TestBed, inject } from '@angular/core/testing';

import { CodeConverterService } from './code-converter.service';

describe('CodeConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeConverterService]
    });
  });

  it('should be created', inject([CodeConverterService], (service: CodeConverterService) => {
    expect(service).toBeTruthy();
  }));
});
