-- -----------------------------------------------------
-- Table `SA`.`Country`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sa`.`Country` (
  `id_Country` INT NOT NULL AUTO_INCREMENT,
  `country` VARCHAR(45) NOT NULL,
  `nationality` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_Country`))
ENGINE = InnoDB;

 -----------------------------------------------------
-- Table `SA`.`Competencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sa`.`Competencia` (
  `id_competencia` INT NOT NULL AUTO_INCREMENT,
  `name_competition` VARCHAR(45) NOT NULL,
  `winner` VARCHAR(45) NOT NULL,
  `id_tipo` INT NOT NULL,
  `Country_id_Country` INT NOT NULL,
  PRIMARY KEY (`id_competencia`, `Country_id_Country`),
  CONSTRAINT `fk_Competencia_Country1`
    FOREIGN KEY (`Country_id_Country`)
    REFERENCES `sa`.`Country` (`id_Country`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SA`.`Equipo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sa`.`Equipo` (
  `id_team` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `fundation_date` DATE NOT NULL,
  `photo` VARCHAR(45) NOT NULL,
  `id_Country` INT NOT NULL,
  PRIMARY KEY (`id_team`, `id_Country`),
  CONSTRAINT `fk_Equipo_Country1`
    FOREIGN KEY (`id_Country`)
    REFERENCES `sa`.`Country` (`id_Country`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SA`.`Estadio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sa`.`Estadio` (
  `id_Estadio` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `fundation_date` DATE NOT NULL,
  `photo` VARCHAR(45) NOT NULL,
  `capacity` INT NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `id_Country` INT NOT NULL,
  PRIMARY KEY (`id_Estadio`, `id_Country`),
  CONSTRAINT `fk_Estadio_Country1`
    FOREIGN KEY (`id_Country`)
    REFERENCES `sa`.`Country` (`id_Country`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SA`.`Posicion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sa`.`Posicion` (
  `id_stand` INT NOT NULL AUTO_INCREMENT,
  `stand` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_stand`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SA`.`Rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sa`.`Rol` (
  `id_rol` INT NOT NULL AUTO_INCREMENT,
  `rol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_rol`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SA`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sa`.`Usuario` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(25) NOT NULL,
  `lastname` VARCHAR(25) NOT NULL,
  `password` VARCHAR(25) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `telephone` VARCHAR(12) NOT NULL,
  `photo` VARCHAR(200) NOT NULL,
  `genre` VARCHAR(5) NOT NULL,
  `birthday` DATE NOT NULL,
  `created` DATE NOT NULL,
  `address` VARCHAR(100) NOT NULL,
  `age` INT NOT NULL,
  `membership` TINYINT NOT NULL,
  `id_status` VARCHAR(45) NOT NULL,
  `verify` TINYINT NOT NULL,
  `id_Country` INT NOT NULL,
  `id_rol` INT NOT NULL,
  PRIMARY KEY (`id_user`, `id_Country`, `id_rol`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  CONSTRAINT `fk_Usuario_Country`
    FOREIGN KEY (`id_Country`)
    REFERENCES `sa`.`Country` (`id_Country`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_Rol1`
    FOREIGN KEY (`id_rol`)
    REFERENCES `sa`.`Rol` (`id_rol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SA`.`Partido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sa`.`Partido` (
  `id_partido` INT NOT NULL AUTO_INCREMENT,
  `date_game` DATE NOT NULL,
  `viewers` INT NOT NULL,
  `result` VARCHAR(45) NOT NULL,
  `status_game` VARCHAR(45) NOT NULL,
  `winner` VARCHAR(45) NOT NULL,
  `id_Estadio` INT NOT NULL,
  `local_team` INT NOT NULL,
  `visiting_team` INT NOT NULL,
  PRIMARY KEY (`id_partido`, `id_Estadio`, `local_team`, `visiting_team`),
  CONSTRAINT `fk_Equipo_Estadio1`
    FOREIGN KEY (`id_Estadio`)
    REFERENCES `sa`.`Estadio` (`id_Estadio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Partido_Equipo1`
    FOREIGN KEY (`local_team`)
    REFERENCES `sa`.`Equipo` (`id_team`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Partido_Equipo2`
    FOREIGN KEY (`visiting_team`)
    REFERENCES `sa`.`Equipo` (`id_team`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SA`.`Person  Tecnico o Jugador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sa`.`Person` (
  `id_person` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `birthday` DATE NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `photo` VARCHAR(45) NULL,
  `id_stand` INT NULL,
  `type` INT NOT NULL,
  `id_team` INT NOT NULL,
  `nationality` INT NOT NULL,
  PRIMARY KEY (`id_person`, `id_team`, `nationality`),
  CONSTRAINT `fk_Jugador_Posicion1`
    FOREIGN KEY (`id_stand`)
    REFERENCES `sa`.`Posicion` (`id_stand`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Jugador_Equipo1`
    FOREIGN KEY (`id_team` , `nationality`)
    REFERENCES `sa`.`Equipo` (`id_team` , `id_Country`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SA`.`Incidencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sa`.`Incidencia` (
  `id_incidencia` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(100) NOT NULL,
  `minuto` INT NOT NULL,
  `id_person` INT NOT NULL,
  `id_team` INT NOT NULL,
  `id_partido` INT NOT NULL,
  PRIMARY KEY (`id_incidencia`, `id_person`, `id_team`, `id_partido`),
  CONSTRAINT `fk_Incidencia_Person1`
    FOREIGN KEY (`id_person` , `id_team`)
    REFERENCES `sa`.`Person` (`id_person` , `id_team`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Incidencia_Partido1`
    FOREIGN KEY (`id_partido`)
    REFERENCES `sa`.`Partido` (`id_partido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SA`.`Noticia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sa`.`Noticia` (
  `id_new` INT NOT NULL AUTO_INCREMENT,
  `news` VARCHAR(300) NOT NULL,
  `Equipo_id_team` INT NOT NULL,
  PRIMARY KEY (`id_new`, `Equipo_id_team`),
  CONSTRAINT `fk_Noticia_Equipo1`
    FOREIGN KEY (`Equipo_id_team`)
    REFERENCES `sa`.`Equipo` (`id_team`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `SA`.`Transferencias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sa`.`Transferencias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_date` DATE NOT NULL,
  `Last_date` DATE NOT NULL,
  `Person_id` INT NOT NULL,
  `team_origin` INT NOT NULL,
  `team_destination` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_Transferencias_Person1`
    FOREIGN KEY (`Person_id`)
    REFERENCES `sa`.`Person` (`id_person`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Transferencias_Equipo1`
    FOREIGN KEY (`team_origin`)
    REFERENCES `sa`.`Equipo` (`id_team`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Transferencias_Equipo2`
    FOREIGN KEY (`team_destination`)
    REFERENCES `sa`.`Equipo` (`id_team`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
