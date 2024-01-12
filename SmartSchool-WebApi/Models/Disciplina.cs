using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartSchool_WebApi.Models
{
    public class Disciplina
    {
        public Disciplina(){ }
    
        public Disciplina(int Id, string Nome, int ProfessorId) 
        {
            this.Id = Id;
            this.Nome = Nome;
            this.ProfessorId = ProfessorId;
        }
        
        public int Id { get; set; }
        public string Nome { get; set; }
        public int ProfessorId { get; set; }
        public Professor Professor { get; set; }
        public IEnumerable<AlunoDisciplina> AlunosDisciplinas{ get; set; }
    }
}