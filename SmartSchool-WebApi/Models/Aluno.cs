using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartSchool_WebApi.Models
{
    public class Aluno
    {
        public Aluno(){}

        public Aluno(int Id, string Sobrenome, string Nome, string Telefone) 
        {
            this.Id = Id;
            this.Sobrenome = Sobrenome;
            this.Nome = Nome;
            this.Telefone = Telefone;
        }
        
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Telefone { get; set; }
        public IEnumerable<AlunoDisciplina> AlunosDisciplinas{ get; set; }
    }
}